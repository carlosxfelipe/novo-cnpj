export const maskNewCNPJ = (raw: string): string =>
  raw.replace(/^(.{2})(.{3})(.{3})(.{4})(.{2})$/, "$1.$2.$3/$4-$5");
