import Foundation

class CNPJ {
    
    private static let regexCNPJ = try! NSRegularExpression(pattern: #"^\d{2}\.\d{3}\.\d{3}/\d{4}-\d{2}$"#)

    static func isValid(_ cnpj: Any?) -> Bool {
        guard let cnpj = cnpj else { return false }
        
        let stringValue: String
        if let s = cnpj as? String {
            stringValue = s
            let digitsOnly = stringValue.range(of: #"^\d{14}$"#, options: .regularExpression) != nil
            let matchesFormat = regexCNPJ.firstMatch(in: stringValue, options: [], range: NSRange(location: 0, length: stringValue.utf16.count)) != nil
            if !digitsOnly && !matchesFormat {
                return false
            }
        } else if let number = cnpj as? Int {
            stringValue = String(format: "%014d", number)
        } else if let list = cnpj as? [Int], list.count == 14 {
            stringValue = list.map(String.init).joined()
        } else {
            return false
        }
        
        let numbers = extractNumbers(from: stringValue)
        guard numbers.count == 14 else { return false }
        if Set(numbers).count == 1 { return false }

        let firstDigit = calculateDigit(x: 12, numbers: numbers)
        if firstDigit != numbers[12] { return false }

        let secondDigit = calculateDigit(x: 13, numbers: numbers)
        return secondDigit == numbers[13]
    }

    static func format(_ cnpj: Any?) -> String {
        guard isValid(cnpj) else { return "" }
        let numbers = extractNumbers(from: cnpj!)
        let digits = numbers.map(String.init).joined()
        
        let part1 = digits.prefix(2)
        let start2 = digits.index(digits.startIndex, offsetBy: 2)
        let end5 = digits.index(digits.startIndex, offsetBy: 5)
        let part2 = digits[start2..<end5]
        
        let start5 = end5
        let end8 = digits.index(digits.startIndex, offsetBy: 8)
        let part3 = digits[start5..<end8]
        
        let start8 = end8
        let end12 = digits.index(digits.startIndex, offsetBy: 12)
        let part4 = digits[start8..<end12]
        
        let part5 = digits.suffix(2)

        return "\(part1).\(part2).\(part3)/\(part4)-\(part5)"
    }

    private static func extractNumbers(from value: Any) -> [Int] {
        let str = String(describing: value)
        return str.filter { $0.isNumber }.compactMap { Int(String($0)) }
    }

    private static func calculateDigit(x: Int, numbers: [Int]) -> Int {
        let slice = numbers.prefix(x)
        var factor = x - 7
        var sum = 0
        
        for n in slice {
            sum += n * factor
            factor -= 1
            if factor < 2 { factor = 9 }
        }
        
        let result = 11 - (sum % 11)
        return result > 9 ? 0 : result
    }
}
