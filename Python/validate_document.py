from typing import Union
from cpf import CPF
from cnpj import CNPJ
from new_cnpj import NewCNPJ


def validate_document(doc: Union[str, int, list]) -> bool:
    """
    Verifica se o documento fornecido (CPF, CNPJ ou Novo CNPJ) é válido.

    Args:
        doc (Union[str, int, list]): Documento a ser validado, com ou sem formatação.

    Returns:
        bool: True se for válido, False caso contrário.
    """
    return CPF.is_valid(doc) or CNPJ.is_valid(doc) or NewCNPJ.is_valid(doc)
