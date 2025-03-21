# Validador de Documentos (CPF, CNPJ e Novo CNPJ) - TypeScript

Este projeto em TypeScript fornece classes para validação e formatação de documentos brasileiros:

- CPF
- CNPJ tradicional
- Novo formato de CNPJ

## Funcionalidades

- Verifica se um CPF é válido
- Verifica se um CNPJ (tradicional ou novo formato) é válido
- Formata CNPJs válidos

## Como Usar

Importe as classes e utilize os métodos estáticos:

```ts
import { CNPJ } from "./cnpj";
import { CPF } from "./cpf";
import { NewCNPJ } from "./new-cnpj";

const validateDocument = (doc: string): boolean => {
  if (CPF.isValid(doc)) return true;
  if (CNPJ.isValid(doc)) return true;
  if (NewCNPJ.isValid(doc)) return true;
  return false;
};

console.log("CPF com máscara:", validateDocument("123.456.789-09"));
console.log("CPF sem máscara:", validateDocument("12345678909"));

console.log("CNPJ com máscara:", validateDocument("11.222.333/0001-81"));
console.log("CNPJ sem máscara:", validateDocument("11222333000181"));

console.log("Novo CNPJ com máscara:", validateDocument("1A.23B.45C/678D-01"));
console.log("Novo CNPJ sem máscara:", validateDocument("1A23B45C678D01"));
```

## Licença

Este projeto é licenciado sob a **GNU General Public License v2.0 (GPL-2.0)**. Isso significa que:

- Você pode usar, modificar e distribuir o código.
- Caso modifique e distribua, precisa manter a mesma licença.
- O código é disponibilizado sem garantias.

Leia a licença completa aqui: [GPL-2.0](https://www.gnu.org/licenses/old-licenses/gpl-2.0.html)
