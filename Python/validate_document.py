from cpf import CPF
from cnpj import CNPJ
from new_cnpj import NewCNPJ


def validate_document(doc):
    return CPF.is_valid(doc) or CNPJ.is_valid(doc) or NewCNPJ.is_valid(doc)
