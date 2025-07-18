// 365. Water and Jug Problem
/**
 * @param {number} x
 * @param {number} y
 * @param {number} target
 * @return {boolean}
 */
var canMeasureWater = function(x, y, target) {
  if (target > x + y) return false;
  if (target === 0) return true;
  if (x === 0) return target === y;
  if (y === 0) return target === x;
  return target % gcd(x, y) === 0;

  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
  }
};