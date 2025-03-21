from cpf import CPF
from cnpj import CNPJ
from new_cnpj import NewCNPJ


def validate_document(doc):
    return CPF.is_valid(doc) or CNPJ.is_valid(doc) or NewCNPJ.is_valid(doc)


if __name__ == "__main__":
    print("CPF com máscara:", validate_document("123.456.789-09"))
    print("CPF sem máscara:", validate_document("12345678909"))

    print("CNPJ com máscara:", validate_document("11.222.333/0001-81"))
    print("CNPJ sem máscara:", validate_document("11222333000181"))

    print("Novo CNPJ com máscara:", validate_document("1A.23B.45C/678D-01"))
    print("Novo CNPJ sem máscara:", validate_document("1A23B45C678D01"))
