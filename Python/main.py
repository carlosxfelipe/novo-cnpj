from validate_document import validate_document
from cpf import CPF
from cnpj import CNPJ
from new_cnpj import NewCNPJ


def mask_document(doc):
    if CPF.is_valid(doc):
        return CPF.format(doc)
    if CNPJ.is_valid(doc):
        return CNPJ.format(doc)
    if NewCNPJ.is_valid(doc):
        return NewCNPJ.format(doc)
    return None


if __name__ == "__main__":
    docs = [
        "123.456.789-09",
        "12345678909",
        "11.222.333/0001-81",
        "11222333000181",
        "1A.23B.45C/678D-01",
        "1A23B45C678D01",
    ]

    for doc in docs:
        is_valid = validate_document(doc)
        masked = mask_document(doc)
        print(f"Doc: {doc} | Válido: {is_valid} | Formatado: {masked}")
