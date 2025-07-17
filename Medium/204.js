// 204. Count Primes
/**
 * @param {number} n
 * @return {number}
 */
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  const nonPrimes = [];
  let result = 0;
  for (let i = 2; i < n; i++) {
    if (!nonPrimes[i]) {
      result++;
      for (let j = 2; i * j < n; j++) {
        nonPrimes[i * j] = 1;
      }
    }
  }
  return result;
};