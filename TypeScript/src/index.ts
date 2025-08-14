// CPF
export { isCPF } from "./cpf/validate";
export { formatToCPF } from "./cpf/mask";

// CNPJ
export { isCNPJ } from "./cnpj/validate";
export { formatToCNPJ } from "./cnpj/mask";

// CNPX (novo CNPJ alfanumérico)
export { isCNPX } from "./cnpjx/validate";
export { formatToCNPJX } from "./cnpjx/mask";

// Genéricos
export { isCPFOrCNPJ } from "./document/validate";
export { formatToCPFOrCNPJ } from "./document/mask";
