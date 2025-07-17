// 326. Power of Three

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  if (n > 1) {
    while (n % 3 === 0) {
      n /= 3
    }
  }
  return n === 1;
};