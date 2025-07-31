import 'cnpj_validator.dart';
import 'cpf_validator.dart';
import 'new_cnpj_validator.dart';

bool validateDocument(String doc) =>
    CPF.isValid(doc) || CNPJ.isValid(doc) || NewCNPJ.isValid(doc);

String? maskDocument(String doc) {
  doc = doc.replaceAll(RegExp(r'\W'), '');

  if (CPF.isValid(doc)) return CPF.format(doc);
  if (CNPJ.isValid(doc)) return CNPJ.format(doc);
  if (NewCNPJ.isValid(doc)) return NewCNPJ.format(doc);

  return null;
}

bool validatePassword(String password, String confirmPassword) {
  final hasUpper = password.contains(RegExp(r'[A-Z]'));
  final hasLower = password.contains(RegExp(r'[a-z]'));
  final hasNumber = password.contains(RegExp(r'\d'));

  return password.length >= 6 &&
      hasUpper &&
      hasLower &&
      hasNumber &&
      password == confirmPassword;
}

String formatCep(String input) {
  input = input.replaceAll(RegExp(r'\D'), '');

  if (input.length == 8) {
    return '${input.substring(0, 5)}-${input.substring(5)}';
  }

  return input;
}

String formatPhone(String input) {
  input = input.replaceAll(RegExp(r'\D'), '');

  if (input.length >= 11) {
    return '(${input.substring(0, 2)}) ${input.substring(2, 7)}-${input.substring(7, 11)}';
  }

  return input;
}
