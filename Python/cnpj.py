import re
from typing import Union, List, Optional


class CNPJ:
    """
    Classe utilitária para validação e formatação de CNPJ brasileiro.
    """

    _regex_cnpj = re.compile(r"^\d{2}\.\d{3}\.\d{3}/\d{4}-\d{2}$")

    @staticmethod
    def is_valid(cnpj: Union[str, int, List[int], None]) -> bool:
        """
        Verifica se o CNPJ fornecido é válido.
        Aceita strings com ou sem máscara, inteiros ou listas de inteiros.
        """
        if cnpj is None:
            return False

        if not isinstance(cnpj, (str, int, list)):
            return False

        if isinstance(cnpj, str):
            digits_only = re.fullmatch(r"\d{14}", cnpj) is not None
            valid_format = CNPJ._regex_cnpj.fullmatch(cnpj) is not None
            if not digits_only and not valid_format:
                return False

        numbers = CNPJ._extract_numbers(cnpj)
        if len(numbers) != 14 or len(set(numbers)) == 1:
            return False

        first_digit = CNPJ._calculate_digit(12, numbers)
        if first_digit != numbers[12]:
            return False

        second_digit = CNPJ._calculate_digit(13, numbers)
        return second_digit == numbers[13]

    @staticmethod
    def format(cnpj: Union[str, int, List[int]]) -> str:
        """
        Retorna o CNPJ formatado como 00.000.000/0000-00.
        Retorna string vazia se o CNPJ não for válido.
        """
        if not CNPJ.is_valid(cnpj):
            return ""

        numbers = CNPJ._extract_numbers(cnpj)
        digits = "".join(map(str, numbers))
        return (
            f"{digits[:2]}.{digits[2:5]}.{digits[5:8]}/{digits[8:12]}-{digits[12:14]}"
        )

    @staticmethod
    def _extract_numbers(value: Union[str, int, List[int]]) -> List[int]:
        """
        Extrai apenas os dígitos numéricos do valor fornecido.
        """
        return [int(d) for d in re.sub(r"\D", "", str(value))]

    @staticmethod
    def _calculate_digit(x: int, numbers: List[int]) -> int:
        """
        Calcula o dígito verificador com base nos primeiros `x` números.
        """
        slice_ = numbers[:x]
        factor = x - 7
        total = 0

        for i in range(x, 0, -1):
            n = slice_[x - i]
            total += n * factor
            factor -= 1
            if factor < 2:
                factor = 9

        result = 11 - (total % 11)
        return 0 if result > 9 else result
