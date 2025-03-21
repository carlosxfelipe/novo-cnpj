class CPF {
  static bool isValid(String cpf) {
    cpf = cpf.replaceAll(RegExp(r'\D'), '');
    if (cpf.length != 11 || RegExp(r'^(\d)\1+$').hasMatch(cpf)) return false;

    int sum = 0;
    for (int i = 0; i < 9; i++) {
      sum += int.parse(cpf[i]) * (10 - i);
    }

    int remainder = (sum * 10) % 11;
    if (remainder == 10) remainder = 0;
    if (remainder != int.parse(cpf[9])) return false;

    sum = 0;
    for (int i = 0; i < 10; i++) {
      sum += int.parse(cpf[i]) * (11 - i);
    }

    remainder = (sum * 10) % 11;
    if (remainder == 10) remainder = 0;

    return remainder == int.parse(cpf[10]);
  }
}
