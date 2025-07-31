// 483. Smallest Good Base
/**
 * @param {string} n
 * @return {string}
 */
var smallestGoodBase = function(n) {
  const num = BigInt(n);
  for (let m = Math.floor(Math.log2(Number(n))); m >= 1; m--) {
    const k = BigInt(Math.floor(Number(n) ** (1 / m)));
    if (k < 2n) continue;
    const sum = (k ** BigInt(m + 1) - 1n) / (k - 1n);
    if (sum === num) return k.toString();
  }
  return (num - 1n).toString();
};