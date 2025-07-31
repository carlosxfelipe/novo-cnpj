from validate_document import validate_document
from mask_document import mask_document

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
