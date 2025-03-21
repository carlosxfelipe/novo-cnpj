class NewCNPJ {
  static bool isValid(String cnpj) {
    if (!RegExp(r'^[0-9A-Z./-]+$').hasMatch(cnpj)) return false;

    final cleanedCNPJ = cnpj.replaceAll(RegExp(r'[^0-9A-Z]'), '');
    if (cleanedCNPJ.length != 14) return false;

    final base = cleanedCNPJ.substring(0, 12);
    final expectedCheckDigits = cleanedCNPJ.substring(12);
    final calculatedCheckDigits = _calculateCheckDigits(base);

    return expectedCheckDigits == calculatedCheckDigits;
  }

  static String _calculateCheckDigits(String base) {
    final weights1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    final weights2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

    final convertedBase = base.split('').map(_charToValue).toList();

    final firstCheckDigit = _calculateCheckDigit(convertedBase, weights1);
    final secondCheckDigit = _calculateCheckDigit(
      [...convertedBase, firstCheckDigit],
      weights2,
    );

    return '$firstCheckDigit$secondCheckDigit';
  }

  static int _calculateCheckDigit(List<int> values, List<int> weights) {
    final sum = List.generate(values.length, (i) => values[i] * weights[i])
        .reduce((a, b) => a + b);

    final remainder = sum % 11;
    return remainder < 2 ? 0 : 11 - remainder;
  }

  static int _charToValue(String char) {
    final code = char.codeUnitAt(0);
    if (char.compareTo('0') >= 0 && char.compareTo('9') <= 0) {
      return code - 48;
    } else if (char.compareTo('A') >= 0 && char.compareTo('Z') <= 0) {
      return code - 65 + 17;
    } else {
      return 0;
    }
  }
}
