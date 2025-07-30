// 507. Perfect Number
/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
  let result = 0;
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) result += i;
  }
  return result === num;
};