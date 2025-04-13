export const maskCPF = (raw: string): string =>
  raw.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3-$4");

export const maskCNPJ = (raw: string): string =>
  raw.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, "$1.$2.$3/$4-$5");

export const maskNewCNPJ = (raw: string): string =>
  raw.replace(/^(.{2})(.{3})(.{3})(.{4})(.{2})$/, "$1.$2.$3/$4-$5");

// console.log("CPF:", maskCPF("12345678909"));

// console.log("CNPJ:", maskCNPJ("11222333000181"));

// console.log("Novo CNPJ:", maskNewCNPJ("1A23B45C678D01"));
