import { onlyDigits } from "../core/normalize";

export const formatToCPF = (raw: string): string => {
  const digits = onlyDigits(raw);
  if (!/^\d{11}$/.test(digits)) return raw;
  return digits.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3-$4");
};
