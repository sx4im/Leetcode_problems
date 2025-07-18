// 371. Sum of Two Integers
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
  const sum = a ^ b;
  const carry = (a & b) << 1;

  if (!carry) {
    return sum;
  }

  return getSum(sum, carry);
};