import re


class CPF:
    @staticmethod
    def is_valid(cpf):
        cpf = re.sub(r"\D", "", cpf)
        if len(cpf) != 11 or re.fullmatch(r"(\d)\1+", cpf):
            return False

        sum_ = sum(int(cpf[i]) * (10 - i) for i in range(9))
        remainder = (sum_ * 10) % 11
        if remainder == 10:
            remainder = 0
        if remainder != int(cpf[9]):
            return False

        sum_ = sum(int(cpf[i]) * (11 - i) for i in range(10))
        remainder = (sum_ * 10) % 11
        if remainder == 10:
            remainder = 0

        return remainder == int(cpf[10])
