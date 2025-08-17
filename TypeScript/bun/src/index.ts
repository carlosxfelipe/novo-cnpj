// CPF
export { isCPF } from "./cpf/validate";
export { formatToCPF } from "./cpf/mask";

// CNPJ
export { isCNPJ } from "./cnpj/validate";
export { formatToCNPJ } from "./cnpj/mask";

// Novo CNPJ alfanumérico
export { isNewAlphaCNPJ } from "./cnpjx/validate";
export { formatToNewAlphaCNPJ } from "./cnpjx/mask";

// Genéricos
export { isCPFOrCNPJ } from "./document/validate";
export { formatToCPFOrCNPJ } from "./document/mask";
