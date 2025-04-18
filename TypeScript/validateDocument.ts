import { isValidCPF } from "./cpf";
import { isValidCNPJ } from "./cnpj";
import { isValidNewCNPJ } from "./new-cnpj";

export const validateDocument = (doc: string): boolean =>
  isValidCPF(doc) || isValidCNPJ(doc) || isValidNewCNPJ(doc);

console.log("CPF com máscara:", validateDocument("123.456.789-09"));
console.log("CPF sem máscara:", validateDocument("12345678909"));

console.log("CNPJ com máscara:", validateDocument("11.222.333/0001-81"));
console.log("CNPJ sem máscara:", validateDocument("11222333000181"));

console.log("Novo CNPJ com máscara:", validateDocument("1A.23B.45C/678D-01"));
console.log("Novo CNPJ sem máscara:", validateDocument("1A23B45C678D01"));
