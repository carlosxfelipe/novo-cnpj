export const isValidCNPJ = (cnpj: string | number | number[]): boolean => {
  const extractNumbers = (value: string | number | number[]): number[] => {
    const match = value.toString().match(/\d/g);
    return Array.isArray(match) ? match.map(Number) : [];
  };

  const calculateDigit = (x: number, numbers: number[]): number => {
    const slice = numbers.slice(0, x);
    let factor = x - 7;
    let sum = 0;

    for (let i = x; i >= 1; i--) {
      const n = slice[x - i];
      sum += n * factor--;
      if (factor < 2) factor = 9;
    }

    const result = 11 - (sum % 11);
    return result > 9 ? 0 : result;
  };

  if (!cnpj) return false;

  const isString = typeof cnpj === "string";
  const validTypes = isString || Number.isInteger(cnpj) || Array.isArray(cnpj);
  if (!validTypes) return false;

  if (isString) {
    const digitsOnly = /^\d{14}$/.test(cnpj as string);
    const validFormat = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/.test(
      cnpj as string,
    );
    if (!digitsOnly && !validFormat) return false;
  }

  const numbers = extractNumbers(cnpj);
  if (numbers.length !== 14) return false;

  const uniqueDigits = new Set(numbers);
  if (uniqueDigits.size === 1) return false;

  const firstDigit = calculateDigit(12, numbers);
  if (firstDigit !== numbers[12]) return false;

  const secondDigit = calculateDigit(13, numbers);
  return secondDigit === numbers[13];
};
