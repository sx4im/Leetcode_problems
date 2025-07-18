// 372. Super Pow
/**
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 */
var superPow = function(a, b) {
  return helper(BigInt(a), BigInt(b.join('')), 1337n);
};

function helper(a, b, mod) {
  let r = 1n;

  while (b > 0n) {
    if (b % 2n == 1) {
      r = r * a % mod;
    }
    b >>= 1n;
    a = a * a % mod;
  }

  return Number(r);
};