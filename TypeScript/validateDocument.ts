import { CNPJ } from "./cnpj";
import { CPF } from "./cpf";
import { NewCNPJ } from "./new-cnpj";

const validateDocument = (doc: string): boolean => {
  if (CPF.isValid(doc)) return true;
  if (CNPJ.isValid(doc)) return true;
  if (NewCNPJ.isValid(doc)) return true;
  return false;
};

console.log("CPF com máscara:", validateDocument("027.207.263-03"));
console.log("CPF sem máscara:", validateDocument("02720726303"));

console.log("CNPJ com máscara:", validateDocument("11.222.333/0001-81"));
console.log("CNPJ sem máscara:", validateDocument("11222333000181"));

console.log("Novo CNPJ com máscara:", validateDocument("1A.23B.45C/678D-01"));
console.log("Novo CNPJ sem máscara:", validateDocument("1A23B45C678D01"));
