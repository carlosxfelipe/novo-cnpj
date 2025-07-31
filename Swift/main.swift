import Foundation

func main() {
    print("CPF com máscara: \(validateDocument("123.456.789-09"))")
    print("CPF sem máscara: \(validateDocument("12345678909"))")

    print("CNPJ com máscara: \(validateDocument("11.222.333/0001-81"))")
    print("CNPJ sem máscara: \(validateDocument("11222333000181"))")

    print("Novo CNPJ com máscara: \(validateDocument("1A.23B.45C/678D-01"))")
    print("Novo CNPJ sem máscara: \(validateDocument("1A23B45C678D01"))")

    print("CPF formatado: \(CPF.format("12345678909"))")
    print("CNPJ formatado: \(CNPJ.format("11222333000181"))")
    print("Novo CNPJ formatado: \(NewCNPJ.format("1A23B45C678D01"))")

    if let masked = maskDocument("12345678909") {
        print("CPF mascarado: \(masked)")
    } else {
        print("CPF inválido para máscara")
    }
}

main()
