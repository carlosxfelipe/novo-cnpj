import Foundation

func validateDocument(_ doc: String) -> Bool {
    return CPF.isValid(doc) || CNPJ.isValid(doc) || NewCNPJ.isValid(doc)
}

func maskDocument(_ doc: String) -> String? {
    let cleaned = doc.replacingOccurrences(of: "\\W", with: "", options: .regularExpression)

    if CPF.isValid(cleaned) {
        return CPF.format(cleaned)
    }
    if CNPJ.isValid(cleaned) {
        return CNPJ.format(cleaned)
    }
    if NewCNPJ.isValid(cleaned) {
        return NewCNPJ.format(cleaned)
    }

    return nil
}

func validatePassword(_ password: String, _ confirmPassword: String) -> Bool {
    let hasUpper = password.range(of: "[A-Z]", options: .regularExpression) != nil
    let hasLower = password.range(of: "[a-z]", options: .regularExpression) != nil
    let hasNumber = password.range(of: "\\d", options: .regularExpression) != nil

    return password.count >= 6 &&
           hasUpper &&
           hasLower &&
           hasNumber &&
           password == confirmPassword
}

func formatCep(_ input: String) -> String {
    let cleaned = input.replacingOccurrences(of: "\\D", with: "", options: .regularExpression)

    if cleaned.count == 8 {
        let prefix = cleaned.prefix(5)
        let suffix = cleaned.suffix(3)
        return "\(prefix)-\(suffix)"
    }

    return cleaned
}

func formatPhone(_ input: String) -> String {
    let cleaned = input.replacingOccurrences(of: "\\D", with: "", options: .regularExpression)

    if cleaned.count >= 11 {
        let ddd = cleaned.prefix(2)
        let startMiddle = cleaned.index(cleaned.startIndex, offsetBy: 2)
        let endMiddle = cleaned.index(cleaned.startIndex, offsetBy: 7)
        let middle = cleaned[startMiddle..<endMiddle]
        let startEnd = cleaned.index(cleaned.startIndex, offsetBy: 7)
        let endEnd = cleaned.index(cleaned.startIndex, offsetBy: 11)
        let end = cleaned[startEnd..<endEnd]
        return "(\(ddd)) \(middle)-\(end)"
    }

    return cleaned
}
