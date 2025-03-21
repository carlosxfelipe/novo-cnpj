class CNPJ {
  static final _regexCNPJ = RegExp(r'^\d{2}\.\d{3}\.\d{3}/\d{4}-\d{2}$');

  static bool isValid(dynamic cnpj) {
    if (cnpj == null) return false;

    final isString = cnpj is String;
    final validTypes = isString || cnpj is int || cnpj is List<int>;
    if (!validTypes) return false;

    if (isString) {
      final digitsOnly = RegExp(r'^\d{14}$').hasMatch(cnpj);
      final validFormat = _regexCNPJ.hasMatch(cnpj);
      if (!digitsOnly && !validFormat) return false;
    }

    final numbers = _extractNumbers(cnpj);
    if (numbers.length != 14) return false;

    final uniqueDigits = numbers.toSet();
    if (uniqueDigits.length == 1) return false;

    final firstDigit = _calculateDigit(12, numbers);
    if (firstDigit != numbers[12]) return false;

    final secondDigit = _calculateDigit(13, numbers);
    return secondDigit == numbers[13];
  }

  static String format(dynamic cnpj) {
    if (!isValid(cnpj)) return "";

    final numbers = _extractNumbers(cnpj);
    final digits = numbers.join();
    return '${digits.substring(0, 2)}.${digits.substring(2, 5)}.${digits.substring(5, 8)}/${digits.substring(8, 12)}-${digits.substring(12, 14)}';
  }

  static List<int> _extractNumbers(dynamic value) {
    final matches = value.toString().replaceAll(RegExp(r'\D'), '');
    return matches.split('').map(int.parse).toList();
  }

  static int _calculateDigit(int x, List<int> numbers) {
    final slice = numbers.sublist(0, x);
    int factor = x - 7;
    int sum = 0;

    for (int i = x; i >= 1; i--) {
      final n = slice[x - i];
      sum += n * factor--;
      if (factor < 2) factor = 9;
    }

    final result = 11 - (sum % 11);
    return result > 9 ? 0 : result;
  }
}
