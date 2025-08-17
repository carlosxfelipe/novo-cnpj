import { formatToCPF } from "../cpf/mask";
import { formatToCNPJ } from "../cnpj/mask";
import { formatToNewAlphaCNPJ } from "../cnpjx/mask";
import { whichDoc } from "./validate";

export const formatToCPFOrCNPJ = (doc: string): string => {
  const kind = whichDoc(doc);
  if (kind === "cpf") return formatToCPF(doc);
  if (kind === "cnpj") return formatToCNPJ(doc);
  if (kind === "cnpjx") return formatToNewAlphaCNPJ(doc);
  return "Documento inválido";
};
