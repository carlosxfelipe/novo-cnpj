import re


class CNPJ:
    _regex_cnpj = re.compile(r"^\d{2}\.\d{3}\.\d{3}/\d{4}-\d{2}$")

    @staticmethod
    def is_valid(cnpj):
        if cnpj is None:
            return False

        is_string = isinstance(cnpj, str)
        valid_types = is_string or isinstance(cnpj, int) or isinstance(cnpj, list)
        if not valid_types:
            return False

        if is_string:
            digits_only = re.fullmatch(r"\d{14}", cnpj) is not None
            valid_format = CNPJ._regex_cnpj.fullmatch(cnpj) is not None
            if not digits_only and not valid_format:
                return False

        numbers = CNPJ._extract_numbers(cnpj)
        if len(numbers) != 14:
            return False

        if len(set(numbers)) == 1:
            return False

        first_digit = CNPJ._calculate_digit(12, numbers)
        if first_digit != numbers[12]:
            return False

        second_digit = CNPJ._calculate_digit(13, numbers)
        return second_digit == numbers[13]

    @staticmethod
    def format(cnpj):
        if not CNPJ.is_valid(cnpj):
            return ""

        numbers = CNPJ._extract_numbers(cnpj)
        digits = "".join(map(str, numbers))
        return (
            f"{digits[:2]}.{digits[2:5]}.{digits[5:8]}/{digits[8:12]}-{digits[12:14]}"
        )

    @staticmethod
    def _extract_numbers(value):
        return [int(d) for d in re.sub(r"\D", "", str(value))]

    @staticmethod
    def _calculate_digit(x, numbers):
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
