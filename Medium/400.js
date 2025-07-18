// 400. Nth Digit
/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
  let total = 1;
  let start = 1;

  for (let count = 9; n > total * count; total++, count *= 10, start *= 10) {
    n -= total * count;
  }

  start += Math.floor((n - 1) / total);
  return +(start.toString()[(n - 1) % total]);
};