import 'cnpj_validator.dart';
import 'cpf_validator.dart';
import 'new_cnpj_validator.dart';

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

bool validateDocument(String doc) {
  if (CPF.isValid(doc)) return true;
  if (CNPJ.isValid(doc)) return true;
  if (NewCNPJ.isValid(doc)) return true;
  return false;
}

String formatDocumentInput(String input) {
  input = input.replaceAll(RegExp(r'\W'), '');

  if (input.length <= 11 && CPF.isValid(input)) {
    return CPF.format(input);
  } else if (input.length == 14) {
    if (CNPJ.isValid(input)) return CNPJ.format(input);
    if (NewCNPJ.isValid(input)) return NewCNPJ.format(input);
  }

  return input;
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
