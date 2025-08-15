import { onlyAlphaNumUpper, stripCommonMask } from "../core/normalize";

const charToValue = (char: string): number => {
  if (char >= "0" && char <= "9") return char.charCodeAt(0) - 48;
  if (char >= "A" && char <= "Z") return char.charCodeAt(0) - 65 + 17;
  return 0;
};

const calcCheckDigit = (values: number[], weights: number[]): number => {
  const sum = values.reduce((acc, val, i) => acc + val * weights[i], 0);
  const r = sum % 11;
  return r < 2 ? 0 : 11 - r;
};

export const isNewAlphaCNPJ = (cnpjx: string): boolean => {
  if (!/^[0-9A-Z.\/-]+$/.test(cnpjx)) return false;

  const cleaned = onlyAlphaNumUpper(stripCommonMask(cnpjx));
  if (cleaned.length !== 14) return false;

  const base = cleaned.slice(0, 12);
  const expected = cleaned.slice(12);

  const w1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  const w2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

  const arr = base.split("").map(charToValue);
  const d1 = calcCheckDigit(arr, w1);
  const d2 = calcCheckDigit([...arr, d1], w2);

  return expected === `${d1}${d2}`;
};
