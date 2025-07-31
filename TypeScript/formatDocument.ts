import { maskCNPJ, maskCPF, maskNewCNPJ } from "./mask";

import { isValidCPF } from "./validate-cpf";
import { isValidCNPJ } from "./validate-cnpj";
import { isValidNewCNPJ } from "./validate-new-cnpj";

export const maskCPFOrCNPJ = (doc: string): string | null => {
  if (isValidCPF(doc)) return maskCPF(doc);
  if (isValidCNPJ(doc)) return maskCNPJ(doc);
  if (isValidNewCNPJ(doc)) return maskNewCNPJ(doc);
  return null;
};
