import Foundation

class NewCNPJ {
    
    static func isValid(_ cnpj: String) -> Bool {
        let pattern = "^[0-9A-Z./-]+$"
        guard cnpj.range(of: pattern, options: .regularExpression) != nil else {
            return false
        }
        
        let cleanedCNPJ = cnpj.replacingOccurrences(of: "[^0-9A-Z]", with: "", options: .regularExpression)
        guard cleanedCNPJ.count == 14 else { return false }
        
        let base = String(cleanedCNPJ.prefix(12))
        let expectedCheckDigits = String(cleanedCNPJ.suffix(2))
        let calculatedCheckDigits = calculateCheckDigits(base: base)
        
        return expectedCheckDigits == calculatedCheckDigits
    }

    static func format(_ cnpj: String) -> String {
        let cleaned = cnpj.replacingOccurrences(of: "[^0-9A-Z]", with: "", options: .regularExpression)
        guard cleaned.count == 14 else { return "" }

        let part1 = cleaned.prefix(2)
        let start2 = cleaned.index(cleaned.startIndex, offsetBy: 2)
        let end5 = cleaned.index(cleaned.startIndex, offsetBy: 5)
        let part2 = cleaned[start2..<end5]
        
        let start5 = end5
        let end8 = cleaned.index(cleaned.startIndex, offsetBy: 8)
        let part3 = cleaned[start5..<end8]
        
        let start8 = end8
        let end12 = cleaned.index(cleaned.startIndex, offsetBy: 12)
        let part4 = cleaned[start8..<end12]
        
        let part5 = cleaned.suffix(2)

        return "\(part1).\(part2).\(part3)/\(part4)-\(part5)"
    }

    private static func calculateCheckDigits(base: String) -> String {
        let weights1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
        let weights2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
        
        let convertedBase = base.map { charToValue($0) }
        let firstDigit = calculateCheckDigit(values: convertedBase, weights: weights1)
        let secondDigit = calculateCheckDigit(values: convertedBase + [firstDigit], weights: weights2)
        
        return "\(firstDigit)\(secondDigit)"
    }

    private static func calculateCheckDigit(values: [Int], weights: [Int]) -> Int {
        let sum = zip(values, weights).map(*).reduce(0, +)
        let remainder = sum % 11
        return remainder < 2 ? 0 : 11 - remainder
    }

    private static func charToValue(_ char: Character) -> Int {
        if char >= "0" && char <= "9" {
            return Int(String(char))!
        } else if char >= "A" && char <= "Z" {
            return Int(char.asciiValue!) - 65 + 17
        } else {
            return 0
        }
    }
}
