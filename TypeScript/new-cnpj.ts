export class NewCNPJ {
  static isValid(cnpj: string): boolean {
    console.log("Validando CNPJ:", cnpj);
    if (!/^[0-9A-Z.\/-]+$/.test(cnpj)) {
      console.log("Caracteres inválidos encontrados");
      return false;
    }

    const cleanedCNPJ = cnpj.replace(/[^0-9A-Z]/g, "");
    console.log("CNPJ limpo:", cleanedCNPJ);

    if (cleanedCNPJ.length !== 14) {
      console.log("Comprimento inválido:", cleanedCNPJ.length);
      return false;
    }

    const base = cleanedCNPJ.slice(0, 12);
    const expectedCheckDigits = cleanedCNPJ.slice(12);
    console.log(
      "Base:",
      base,
      "Dígitos verificadores esperados:",
      expectedCheckDigits
    );

    const calculatedCheckDigits = this.calculateCheckDigits(base);
    console.log("Dígitos verificadores calculados:", calculatedCheckDigits);

    return expectedCheckDigits === calculatedCheckDigits;
  }

  static calculateCheckDigits(base: string): string {
    console.log("Calculando dígitos verificadores para a base:", base);
    const weights1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    const weights2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

    const convertedBase = base.split("").map((char) => this.charToValue(char));
    console.log("Base convertida:", convertedBase);

    const firstCheckDigit = this.calculateCheckDigit(convertedBase, weights1);
    console.log("Primeiro dígito verificador:", firstCheckDigit);

    const secondCheckDigit = this.calculateCheckDigit(
      [...convertedBase, firstCheckDigit],
      weights2
    );
    console.log("Segundo dígito verificador:", secondCheckDigit);

    return `${firstCheckDigit}${secondCheckDigit}`;
  }

  static calculateCheckDigit(values: number[], weights: number[]): number {
    console.log(
      "Calculando dígito verificador com valores:",
      values,
      "e pesos:",
      weights
    );
    const sum = values.reduce(
      (acc, val, index) => acc + val * weights[index],
      0
    );
    console.log("Soma:", sum);

    const remainder = sum % 11;
    console.log("Resto da divisão:", remainder);

    const checkDigit = remainder < 2 ? 0 : 11 - remainder;
    console.log("Dígito verificador calculado:", checkDigit);
    return checkDigit;
  }

  static charToValue(char: string): number {
    let value;
    if (char >= "0" && char <= "9") {
      value = char.charCodeAt(0) - 48;
    } else if (char >= "A" && char <= "Z") {
      value = char.charCodeAt(0) - 65 + 17;
    } else {
      value = 0;
    }
    console.log(`Caractere '${char}' convertido para valor:`, value);
    return value;
  }
}
