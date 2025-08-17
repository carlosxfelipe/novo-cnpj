import {
  formatToBRL,
  formatToCEP,
  formatToCPFOrCNPJ,
  formatToPhoneBR,
  isCPFOrCNPJ,
} from "jsr:@carlosxfelipe/brazilian-values@0.2.1";

// CPF
console.log("CPF com máscara:", isCPFOrCNPJ("123.456.789-09")); // true
console.log("CPF sem máscara:", isCPFOrCNPJ("12345678909")); // true

// CNPJ
console.log("CNPJ com máscara:", isCPFOrCNPJ("11.222.333/0001-81")); // true
console.log("CNPJ sem máscara:", isCPFOrCNPJ("11222333000181")); // true

// Novo CNPJ alfanumérico
console.log("Novo CNPJ com máscara:", isCPFOrCNPJ("1A.23B.45C/678D-01")); // true
console.log("Novo CNPJ sem máscara:", isCPFOrCNPJ("1A23B45C678D01")); // true

// Máscaras automáticas
console.log("CPF:", formatToCPFOrCNPJ("12345678909")); // CPF: 123.456.789-09
console.log("CNPJ:", formatToCPFOrCNPJ("11222333000181")); // CNPJ: 11.222.333/0001-81
console.log("Novo CNPJ:", formatToCPFOrCNPJ("1A23B45C678D01")); // Novo CNPJ: 1A.23B.45C/678D-01

// CEP
console.log("CEP válido:", formatToCEP("12345678")); // CEP válido: 12345-678
console.log("CEP inválido:", formatToCEP("1234")); // CEP inválido: 1234

// Telefone
console.log("Telefone celular:", formatToPhoneBR("11987654321")); // Telefone celular: (11) 98765-4321
console.log("Telefone fixo:", formatToPhoneBR("1132654321")); // Telefone fixo: (11) 3265-4321
console.log("Telefone inválido:", formatToPhoneBR("118765432")); // Telefone inválido: 118765432

// Moeda (BRL)
console.log("Moeda válida:", formatToBRL(1234.56)); // Moeda válida: R$ 1.234,56
console.log("Moeda string:", formatToBRL("9876.54")); // Moeda string: R$ 9.876,54
console.log("Moeda inválida:", formatToBRL("abc")); // Moeda inválida: abc
