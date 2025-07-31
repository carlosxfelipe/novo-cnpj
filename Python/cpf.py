import re


class CPF:
    """
    Classe utilitária para validação e formatação de CPFs.
    """

    @staticmethod
    def is_valid(cpf: str) -> bool:
        """
        Verifica se o CPF é válido com base na regra dos dígitos verificadores.

        Args:
            cpf (str): CPF com ou sem formatação.

        Returns:
            bool: True se válido, False caso contrário.
        """
        cpf = re.sub(r"\D", "", cpf)
        if len(cpf) != 11 or re.fullmatch(r"(\d)\1+", cpf):
            return False

        # Primeiro dígito verificador
        sum_ = sum(int(cpf[i]) * (10 - i) for i in range(9))
        remainder = (sum_ * 10) % 11
        if remainder == 10:
            remainder = 0
        if remainder != int(cpf[9]):
            return False

        # Segundo dígito verificador
        sum_ = sum(int(cpf[i]) * (11 - i) for i in range(10))
        remainder = (sum_ * 10) % 11
        if remainder == 10:
            remainder = 0

        return remainder == int(cpf[10])

    @staticmethod
    def format(cpf: str) -> str:
        """
        Formata um CPF bruto (apenas dígitos) no padrão XXX.XXX.XXX-XX.

        Args:
            cpf (str): CPF com ou sem formatação.

        Returns:
            str: CPF formatado ou string vazia se o input for inválido.
        """
        cpf = re.sub(r"\D", "", cpf)
        if len(cpf) != 11:
            return ""
        return f"{cpf[:3]}.{cpf[3:6]}.{cpf[6:9]}-{cpf[9:]}"
