// 29. Divide Two Integers
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    const INT_MAX = 2 ** 31 - 1;
    const INT_MIN = -(2 ** 31);

    // Convert to BigInt to handle edge cases like INT_MIN safely
    let a = BigInt(dividend);
    let b = BigInt(divisor);

    const sign = (a > 0n) === (b > 0n) ? 1n : -1n;
    a = a < 0n ? -a : a;
    b = b < 0n ? -b : b;

    let result = 0n;

    while (a >= b) {
        let temp = b, multiple = 1n;
        while (a >= (temp << 1n)) {
            temp <<= 1n;
            multiple <<= 1n;
        }
        a -= temp;
        result += multiple;
    }

    result *= sign;

    // Clamp result to 32-bit signed integer range
    if (result > INT_MAX) return INT_MAX;
    if (result < INT_MIN) return INT_MIN;

    return Number(result);
};
