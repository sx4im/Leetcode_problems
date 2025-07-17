// 233. Number of Digit One
/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function(n) {
  if (n <= 0) {
    return 0;
  } else if (n < 10) {
    return 1;
  }

  const base = 10 ** (n.toString().length - 1);
  const answer = parseInt(n / base);

  return countDigitOne(base - 1) * answer
    + (answer === 1 ? (n - base + 1) : base) + countDigitOne(n % base);
};