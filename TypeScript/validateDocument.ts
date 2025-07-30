import { isValidCPF } from "./cpf";
import { isValidCNPJ } from "./cnpj";
import { isValidNewCNPJ } from "./new-cnpj";

export const isValidCPFOrCNPJ = (doc: string): boolean =>
  isValidCPF(doc) || isValidCNPJ(doc) || isValidNewCNPJ(doc);
