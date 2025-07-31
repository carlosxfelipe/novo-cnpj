import { maskCPF } from "./mask-cpf";
import { maskCNPJ } from "./mask-cnpj";
import { maskNewCNPJ } from "./mask-new-cnpj";

import { isValidCPF } from "./validate-cpf";
import { isValidCNPJ } from "./validate-cnpj";
import { isValidNewCNPJ } from "./validate-new-cnpj";

type DocumentHandler = {
  isValid: (doc: string) => boolean;
  mask: (doc: string) => string;
};

const handlers: DocumentHandler[] = [
  { isValid: isValidCPF, mask: maskCPF },
  { isValid: isValidCNPJ, mask: maskCNPJ },
  { isValid: isValidNewCNPJ, mask: maskNewCNPJ },
];

export const maskCPFOrCNPJ = (doc: string): string | null => {
  const handler = handlers.find(({ isValid }) => isValid(doc));
  return handler ? handler.mask(doc) : null;
};
