import Foundation

class CPF {
    
    static func isValid(_ cpf: String) -> Bool {
        let numbersOnly = cpf.filter { $0.isNumber }
        guard numbersOnly.count == 11 else { return false }
        if Set(numbersOnly).count == 1 { return false }
        
        let digits = numbersOnly.compactMap { Int(String($0)) }
        
        // Validação do primeiro dígito
        var sum = 0
        for i in 0..<9 {
            sum += digits[i] * (10 - i)
        }
        var remainder = (sum * 10) % 11
        if remainder == 10 { remainder = 0 }
        if remainder != digits[9] { return false }
        
        // Validação do segundo dígito
        sum = 0
        for i in 0..<10 {
            sum += digits[i] * (11 - i)
        }
        remainder = (sum * 10) % 11
        if remainder == 10 { remainder = 0 }
        
        return remainder == digits[10]
    }
    
    static func format(_ cpf: String) -> String {
        let numbersOnly = cpf.filter { $0.isNumber }
        guard numbersOnly.count == 11 else { return "" }
        
        let part1 = numbersOnly.prefix(3)
        let part2 = numbersOnly.dropFirst(3).prefix(3)
        let part3 = numbersOnly.dropFirst(6).prefix(3)
        let part4 = numbersOnly.suffix(2)
        
        return "\(part1).\(part2).\(part3)-\(part4)"
    }
}
