// 43. Multiply Strings
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    const m = num1.length, n = num2.length;
    const result = Array(m + n).fill(0);

    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            const mul = (+num1[i]) * (+num2[j]);
            const sum = mul + result[i + j + 1];

            result[i + j] += Math.floor(sum / 10);
            result[i + j + 1] = sum % 10;
        }
    }

    while (result[0] === 0 && result.length > 1) result.shift();

    return result.join('');
};
