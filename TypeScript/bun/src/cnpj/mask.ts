import { onlyDigits } from "../core/normalize";

export const formatToCNPJ = (raw: string): string => {
  const digits = onlyDigits(raw);
  if (!/^\d{14}$/.test(digits)) return raw;
  return digits.replace(
    /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,
    "$1.$2.$3/$4-$5",
  );
};
