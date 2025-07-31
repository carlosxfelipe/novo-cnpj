import { isValidCPFOrCNPJ } from "./validate-cpf-or-cnpj";
import { maskCPFOrCNPJ } from "./mask-cpf-or-cnpj";

console.log("CPF com máscara:", isValidCPFOrCNPJ("123.456.789-09"));
console.log("CPF sem máscara:", isValidCPFOrCNPJ("12345678909"));

console.log("CNPJ com máscara:", isValidCPFOrCNPJ("11.222.333/0001-81"));
console.log("CNPJ sem máscara:", isValidCPFOrCNPJ("11222333000181"));

console.log("Novo CNPJ com máscara:", isValidCPFOrCNPJ("1A.23B.45C/678D-01"));
console.log("Novo CNPJ sem máscara:", isValidCPFOrCNPJ("1A23B45C678D01"));

console.log("CPF:", maskCPFOrCNPJ("12345678909"));
console.log("CNPJ:", maskCPFOrCNPJ("11222333000181"));
console.log("Novo CNPJ:", maskCPFOrCNPJ("1A23B45C678D01"));
