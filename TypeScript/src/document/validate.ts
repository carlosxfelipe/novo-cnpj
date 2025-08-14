import { isCPF } from "../cpf/validate";
import { isCNPJ } from "../cnpj/validate";
import { isCNPX } from "../cnpjx/validate";
import type { DocKind } from "../core/types";

export const whichDoc = (doc: string): DocKind | null => {
  if (isCPF(doc)) return "cpf";
  if (isCNPJ(doc)) return "cnpj";
  if (isCNPX(doc)) return "cnpjx";
  return null;
};

export const isCPFOrCNPJ = (doc: string): boolean => whichDoc(doc) !== null;
