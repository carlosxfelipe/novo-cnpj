import { formatToCPFOrCNPJ, isCPFOrCNPJ } from "./src/index.ts";

// CPF
console.log("CPF com máscara:", isCPFOrCNPJ("123.456.789-09"));
console.log("CPF sem máscara:", isCPFOrCNPJ("12345678909"));

// CNPJ
console.log("CNPJ com máscara:", isCPFOrCNPJ("11.222.333/0001-81"));
console.log("CNPJ sem máscara:", isCPFOrCNPJ("11222333000181"));

// Novo CNPJ alfanumérico
console.log("Novo CNPJ com máscara:", isCPFOrCNPJ("1A.23B.45C/678D-01"));
console.log("Novo CNPJ sem máscara:", isCPFOrCNPJ("1A23B45C678D01"));

// Máscaras automáticas
console.log("CPF:", formatToCPFOrCNPJ("12345678909"));
console.log("CNPJ:", formatToCPFOrCNPJ("11222333000181"));
console.log("Novo CNPJ:", formatToCPFOrCNPJ("1A23B45C678D01"));
