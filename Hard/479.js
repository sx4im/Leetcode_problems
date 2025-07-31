// 479. Largest Palindrome Product
/**
 * @param {number} n
 * @return {number}
 */
var largestPalindrome = function(n) {
  if (n === 1) return 9;
  const max = 10 ** n - 1;
  for (let a = 1; a <= 9 * 10 ** (n - 1); a++) {
    const h = max - a + 1;
    const l = BigInt(String(h).split('').reverse().join(''));
    const x = BigInt(a) * BigInt(a) - 4n * l;
    if (x < 0) continue;
    const sqrtX = BigInt(Math.floor(Math.sqrt(Number(x))));
    if (sqrtX * sqrtX !== x && (sqrtX + 1n) * (sqrtX + 1n) !== x) continue;
    return Number((l + 10n ** BigInt(n) * BigInt(h)) % 1337n);
  }
};