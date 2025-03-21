# Validador de Documentos (CPF, CNPJ e Novo CNPJ)

Este projeto contém classes para validação de CPF, CNPJ e um novo formato de CNPJ.

## Funcionalidades

- Validação de CPF
- Validação de CNPJ tradicional
- Validação de um novo formato de CNPJ
- Formatação de CNPJ

## Como Usar

Importe as classes necessárias e utilize os métodos estáticos para validar ou formatar documentos:

```dart
import 'cnpj.dart';
import 'cpf.dart';
import 'new_cnpj.dart';

bool validateDocument(String doc) {
  if (CPF.isValid(doc)) return true;
  if (CNPJ.isValid(doc)) return true;
  if (NewCNPJ.isValid(doc)) return true;
  return false;
}

void main() {
  print("CPF com máscara: \${validateDocument("123.456.789-09")}");
  print("CPF sem máscara: \${validateDocument("12345678909")}");

  print("CNPJ com máscara: \${validateDocument("11.222.333/0001-81")}");
  print("CNPJ sem máscara: \${validateDocument("11222333000181")}");

  print("Novo CNPJ com máscara: \${validateDocument("1A.23B.45C/678D-01")}");
  print("Novo CNPJ sem máscara: \${validateDocument("1A23B45C678D01")}");
}
```

## Licença

Este projeto é licenciado sob a **GNU General Public License v2.0 (GPL-2.0)**. Isso significa que:

- Você pode usar, modificar e distribuir o código.
- Caso modifique e distribua, precisa manter a mesma licença.
- O código é disponibilizado sem garantias.

Para mais detalhes, veja o texto completo da licença [aqui](https://www.gnu.org/licenses/old-licenses/gpl-2.0.html).
