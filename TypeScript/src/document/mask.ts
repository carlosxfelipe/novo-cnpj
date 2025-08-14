import { formatToCPF } from "../cpf/mask";
import { formatToCNPJ } from "../cnpj/mask";
import { formatToCNPJX } from "../cnpjx/mask";
import { whichDoc } from "./validate";

export const formatToCPFOrCNPJ = (doc: string): string | null => {
  const kind = whichDoc(doc);
  if (kind === "cpf") return formatToCPF(doc);
  if (kind === "cnpj") return formatToCNPJ(doc);
  if (kind === "cnpjx") return formatToCNPJX(doc);
  return null;
};
