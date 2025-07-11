// 8. String to Integer (atoi)
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    s = s.trim();
    const match = s.match(/^([+-]?\d+)/);
    if (!match) return 0;

    let num = parseInt(match[0]);
    const INT_MIN = -(2 ** 31);
    const INT_MAX = 2 ** 31 - 1;

    if (num < INT_MIN) return INT_MIN;
    if (num > INT_MAX) return INT_MAX;
    return num;
};
