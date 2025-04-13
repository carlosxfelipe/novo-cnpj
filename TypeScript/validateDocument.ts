import { isValidCPF } from "./cpf";
import { isValidCNPJ } from "./cnpj";
import { NewCNPJ } from "./new-cnpj";

const validateDocument = (doc: string): boolean => {
  if (isValidCPF(doc)) return true;
  if (isValidCNPJ(doc)) return true;
  if (NewCNPJ.isValid(doc)) return true;
  return false;
};

console.log("CPF com máscara:", validateDocument("123.456.789-09"));
console.log("CPF sem máscara:", validateDocument("12345678909"));

console.log("CNPJ com máscara:", validateDocument("11.222.333/0001-81"));
console.log("CNPJ sem máscara:", validateDocument("11222333000181"));

console.log("Novo CNPJ com máscara:", validateDocument("1A.23B.45C/678D-01"));
console.log("Novo CNPJ sem máscara:", validateDocument("1A23B45C678D01"));
