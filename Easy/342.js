// 342. Power of Four
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
  if (n > 1) {
    while (n % 4 === 0) {
      n /= 4
    }
  }
  return n === 1;
};