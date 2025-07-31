export const isValidNewCNPJ = (cnpj: string): boolean => {
  if (!/^[0-9A-Z.\/-]+$/.test(cnpj)) {
    return false;
  }

  const cleanedCNPJ = cnpj.replace(/[^0-9A-Z]/g, "");

  if (cleanedCNPJ.length !== 14) {
    return false;
  }

  const base = cleanedCNPJ.slice(0, 12);
  const expectedCheckDigits = cleanedCNPJ.slice(12);

  const calculateCheckDigit = (values: number[], weights: number[]): number => {
    const sum = values.reduce(
      (acc, val, index) => acc + val * weights[index],
      0,
    );
    const remainder = sum % 11;
    return remainder < 2 ? 0 : 11 - remainder;
  };

  const charToValue = (char: string): number => {
    if (char >= "0" && char <= "9") {
      return char.charCodeAt(0) - 48;
    } else if (char >= "A" && char <= "Z") {
      return char.charCodeAt(0) - 65 + 17;
    } else {
      return 0;
    }
  };

  const calculateCheckDigits = (base: string): string => {
    const weights1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    const weights2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    const convertedBase = base.split("").map(charToValue);
    const firstCheckDigit = calculateCheckDigit(convertedBase, weights1);
    const secondCheckDigit = calculateCheckDigit(
      [...convertedBase, firstCheckDigit],
      weights2,
    );
    return `${firstCheckDigit}${secondCheckDigit}`;
  };

  const calculatedCheckDigits = calculateCheckDigits(base);
  return expectedCheckDigits === calculatedCheckDigits;
};
