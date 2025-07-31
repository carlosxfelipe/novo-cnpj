import re
from typing import List


class NewCNPJ:
    """
    Validador e formatador para o Novo CNPJ com letras e dígitos.
    """

    @staticmethod
    def is_valid(cnpj: str) -> bool:
        """
        Verifica se o Novo CNPJ é válido.
        Espera 14 caracteres alfanuméricos após limpeza.
        """
        if not isinstance(cnpj, str) or not re.fullmatch(r"[0-9A-Z./-]+", cnpj):
            return False

        cleaned = re.sub(r"[^0-9A-Z]", "", cnpj)
        if len(cleaned) != 14:
            return False

        base = cleaned[:12]
        expected = cleaned[12:]
        calculated = NewCNPJ._calculate_check_digits(base)

        return expected == calculated

    @staticmethod
    def format(cnpj: str) -> str:
        """
        Formata o Novo CNPJ no padrão: XX.XXX.XXX/XXXX-XX
        Retorna string vazia se inválido.
        """
        if not NewCNPJ.is_valid(cnpj):
            return ""

        cleaned = re.sub(r"[^0-9A-Z]", "", cnpj)
        return (
            f"{cleaned[:2]}.{cleaned[2:5]}.{cleaned[5:8]}/"
            f"{cleaned[8:12]}-{cleaned[12:]}"
        )

    @staticmethod
    def _calculate_check_digits(base: str) -> str:
        """
        Calcula os dois dígitos verificadores com pesos personalizados.
        """
        weights1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
        weights2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]

        values = [NewCNPJ._char_to_value(c) for c in base]
        d1 = NewCNPJ._calculate_check_digit(values, weights1)
        d2 = NewCNPJ._calculate_check_digit(values + [d1], weights2)

        return f"{d1}{d2}"

    @staticmethod
    def _calculate_check_digit(values: List[int], weights: List[int]) -> int:
        total = sum(v * w for v, w in zip(values, weights))
        remainder = total % 11
        return 0 if remainder < 2 else 11 - remainder

    @staticmethod
    def _char_to_value(char: str) -> int:
        if "0" <= char <= "9":
            return ord(char) - ord("0")
        elif "A" <= char <= "Z":
            return ord(char) - ord("A") + 17
        return 0
