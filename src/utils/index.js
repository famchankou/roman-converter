export class RomanNumerals {
  
  /**
   * Convert integer to a Roman representation
   * NB: no negative Roman Numerals, no Roman Numeral for zero, no decimals
   * 
   * @param {*} num 
   */
  static toRoman(num = 1) {
    let result = '';
    
    if (num != null && typeof num === 'number' && num >= 1 && num % 1 === 0) {
      const availableNumerics = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
      const availableRomans = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
      result = availableNumerics.reduce((roman, val, idx) => {
        while (num >= val) {
          num -= val;
          roman += availableRomans[idx];
        }
        return roman;
      }, '');
    }
    
    return result;
  }

  /**
   * Convert Roman representation to integer
   * NB: allow only valid Roman numeric symbols
   * 
   * @param {*} romanNumber 
   */
  static fromRoman(romanNumber = '') {
    let sum = 0;
    const specials = [
      { key: 'IV', value: -2 },
      { key: 'IX', value: -2 },
      { key: 'XL', value: -20 },
      { key: 'XC', value: -20 },
      { key: 'CD', value: -200 },
      { key: 'CM', value: -200 },
    ];
    const numerals = [
      { key: 'M', value: 1000 },
      { key: 'D', value: 500 },
      { key: 'C', value: 100 },
      { key: 'L', value: 50 },
      { key: 'X', value: 10 },
      { key: 'V', value: 5 },
      { key: 'I', value: 1 },
    ];

    const invalidCharsRegex = new RegExp('[^MDCLXVI]', 'g');
    const includesInvalidChars = invalidCharsRegex.test(romanNumber);
    if (romanNumber != null && typeof romanNumber === 'string' && !includesInvalidChars) {
      specials.forEach(special => {
        if (romanNumber.indexOf(special.key) !== -1) {
          sum += special.value;
        }
      });
  
      for (const char of romanNumber) {
        for (const num of numerals) {
          if (char === num.key) {
            sum += num.value;
          }
        }
      }
    }
    
    return sum;
  }
}