# Validador de Documentos (CPF, CNPJ e Novo CNPJ)

Este projeto contém classes para validação de CPF, CNPJ e um novo formato de CNPJ.

## Funcionalidades

- Validação de CPF
- Validação de CNPJ tradicional
- Validação de um novo formato de CNPJ

## Como Usar

Importe as classes e utilize os métodos estáticos:

```python
from cpf import CPF
from cnpj import CNPJ
from new_cnpj import NewCNPJ

def validate_document(doc):
    return CPF.is_valid(doc) or CNPJ.is_valid(doc) or NewCNPJ.is_valid(doc)

print("CPF com máscara:", validate_document("123.456.789-09"))
print("CPF sem máscara:", validate_document("12345678909"))

print("CNPJ com máscara:", validate_document("11.222.333/0001-81"))
print("CNPJ sem máscara:", validate_document("11222333000181"))

print("Novo CNPJ com máscara:", validate_document("1A.23B.45C/678D-01"))
print("Novo CNPJ sem máscara:", validate_document("1A23B45C678D01"))
```

## Licença

Este projeto é licenciado sob a **GNU General Public License v2.0 (GPL-2.0)**. Isso significa que:

- Você pode usar, modificar e distribuir o código.
- Caso modifique e distribua, precisa manter a mesma licença.
- O código é disponibilizado sem garantias.

Para mais detalhes, veja o texto completo da licença [aqui](https://www.gnu.org/licenses/old-licenses/gpl-2.0.html).
