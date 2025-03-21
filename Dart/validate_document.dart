import 'cnpj.dart';
import 'cpf.dart';
import 'new_cnpj.dart';

bool validateDocument(String doc) {
  if (CPF.isValid(doc)) return true;
  if (CNPJ.isValid(doc)) return true;
  if (NewCNPJ.isValid(doc)) return true;
  return false;
}

void main() {
  print("CPF com máscara: ${validateDocument("027.207.263-03")}");
  print("CPF sem máscara: ${validateDocument("02720726303")}");

  print("CNPJ com máscara: ${validateDocument("11.222.333/0001-81")}");
  print("CNPJ sem máscara: ${validateDocument("11222333000181")}");

  print("Novo CNPJ com máscara: ${validateDocument("1A.23B.45C/678D-01")}");
  print("Novo CNPJ sem máscara: ${validateDocument("1A23B45C678D01")}");
}
