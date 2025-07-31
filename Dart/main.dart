import 'validators.dart';
import 'cpf_validator.dart';
import 'cnpj_validator.dart';
import 'new_cnpj_validator.dart';

void main() {
  print('CPF com máscara: ${validateDocument("123.456.789-09")}');
  print('CPF sem máscara: ${validateDocument("12345678909")}');

  print('CNPJ com máscara: ${validateDocument("11.222.333/0001-81")}');
  print('CNPJ sem máscara: ${validateDocument("11222333000181")}');

  print('Novo CNPJ com máscara: ${validateDocument("1A.23B.45C/678D-01")}');
  print('Novo CNPJ sem máscara: ${validateDocument("1A23B45C678D01")}');

  print('CPF: ${CPF.format("12345678909")}');
  print('CNPJ: ${CNPJ.format("11222333000181")}');
  print('Novo CNPJ: ${NewCNPJ.format("1A23B45C678D01")}');

  print('CPF: ${maskDocument("12345678909")}');
}
