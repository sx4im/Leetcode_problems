// 89. Gray Code
/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    const result = [0];

    for (let i = 0; i < n; i++) {
        const size = result.length;
        for (let j = size - 1; j >= 0; j--) {
            result.push(result[j] | (1 << i));
        }
    }

    return result;
};
