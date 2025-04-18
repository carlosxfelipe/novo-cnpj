import { maskCPF, maskCNPJ, maskNewCNPJ } from "./mask";

import { isValidCPF } from "./cpf";
import { isValidCNPJ } from "./cnpj";
import { isValidNewCNPJ } from "./new-cnpj";

export const formatDocument = (doc: string): string | null => {
  if (isValidCPF(doc)) return maskCPF(doc);
  if (isValidCNPJ(doc)) return maskCNPJ(doc);
  if (isValidNewCNPJ(doc)) return maskNewCNPJ(doc);
  return null;
};
