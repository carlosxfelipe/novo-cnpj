import { onlyAlphaNumUpper } from "../core/normalize";

export const formatToCNPJX = (raw: string): string => {
  const s = onlyAlphaNumUpper(raw);
  if (s.length !== 14) return raw;
  return s.replace(/^(.{2})(.{3})(.{3})(.{4})(.{2})$/, "$1.$2.$3/$4-$5");
};
