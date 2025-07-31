from typing import Optional
from cpf import CPF
from cnpj import CNPJ
from new_cnpj import NewCNPJ


def mask_document(doc: str) -> Optional[str]:
    """
    Retorna o documento formatado (CPF, CNPJ ou Novo CNPJ) se for válido.

    Args:
        doc (str): Documento com ou sem máscara.

    Returns:
        Optional[str]: Documento formatado ou None se inválido.
    """
    if CPF.is_valid(doc):
        return CPF.format(doc)
    if CNPJ.is_valid(doc):
        return CNPJ.format(doc)
    if NewCNPJ.is_valid(doc):
        return NewCNPJ.format(doc)
    return None
