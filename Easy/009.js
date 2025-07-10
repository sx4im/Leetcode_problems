/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false; // Negative numbers can't be palindromes

    const str = x.toString();
    const reversed = str.split('').reverse().join('');
    return str === reversed;
};
