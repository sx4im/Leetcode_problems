// 343. Integer Break
/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
  if (n <= 3) return n - 1;
  let product = 1;
  while (n > 4) {
    product *= 3;
    n -= 3;
  }
  return product * n;
};