// 166. Fraction to Recurring Decimal
/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
    if (numerator === 0) return "0";
    let result = "";

    if ((numerator < 0) ^ (denominator < 0)) result += "-";

    let num = Math.abs(numerator), den = Math.abs(denominator);
    result += Math.floor(num / den);
    let rem = num % den;
    if (rem === 0) return result;

    result += ".";
    const map = new Map();

    while (rem !== 0) {
        if (map.has(rem)) {
            const idx = map.get(rem);
            return result.slice(0, idx) + "(" + result.slice(idx) + ")";
        }
        map.set(rem, result.length);
        rem *= 10;
        result += Math.floor(rem / den);
        rem %= den;
    }

    return result;
};
