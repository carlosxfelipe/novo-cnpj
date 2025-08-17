export const onlyDigits = (s: string) => s.replace(/\D/g, "");
export const onlyAlphaNumUpper = (s: string) =>
  s.replace(/[^0-9A-Za-z]/g, "").toUpperCase();

/** remove máscara comum de CPF/CNPJ (mantém letras se houver) */
export const stripCommonMask = (s: string) => s.replace(/[.\-/\s]/g, "");
