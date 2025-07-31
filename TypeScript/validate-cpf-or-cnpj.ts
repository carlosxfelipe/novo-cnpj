import { isValidCPF } from "./validate-cpf";
import { isValidCNPJ } from "./validate-cnpj";
import { isValidNewCNPJ } from "./validate-new-cnpj";

export const isValidCPFOrCNPJ = (doc: string): boolean =>
  isValidCPF(doc) || isValidCNPJ(doc) || isValidNewCNPJ(doc);
