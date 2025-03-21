import re


class NewCNPJ:
    @staticmethod
    def is_valid(cnpj):
        if not re.fullmatch(r"[0-9A-Z./-]+", cnpj):
            return False

        cleaned_cnpj = re.sub(r"[^0-9A-Z]", "", cnpj)
        if len(cleaned_cnpj) != 14:
            return False

        base = cleaned_cnpj[:12]
        expected = cleaned_cnpj[12:]
        calculated = NewCNPJ._calculate_check_digits(base)

        return expected == calculated

    @staticmethod
    def _calculate_check_digits(base):
        weights1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
        weights2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]

        converted = [NewCNPJ._char_to_value(c) for c in base]

        first = NewCNPJ._calculate_check_digit(converted, weights1)
        second = NewCNPJ._calculate_check_digit(converted + [first], weights2)

        return f"{first}{second}"

    @staticmethod
    def _calculate_check_digit(values, weights):
        total = sum(v * w for v, w in zip(values, weights))
        remainder = total % 11
        return 0 if remainder < 2 else 11 - remainder

    @staticmethod
    def _char_to_value(char):
        code = ord(char)
        if "0" <= char <= "9":
            return code - ord("0")
        elif "A" <= char <= "Z":
            return code - ord("A") + 17
        else:
            return 0
