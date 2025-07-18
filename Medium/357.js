// 357. Count Numbers with Unique Digits
/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {
  if (n === 0) return 1;
  if (n > 10) return countNumbersWithUniqueDigits(10);
  let result = 9;
  for (let i = 0; i < n - 1; i++) {
    result *= (9 - i);
  }
  return result + countNumbersWithUniqueDigits(n - 1);
};