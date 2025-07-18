// 313. Super Ugly Number
/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function(n, primes) {
  const result = [1];
  const pointers = new Array(primes.length).fill(0);
  const next = [...primes];

  while (result.length < n) {
    const min = Math.min(...next);
    result.push(min);

    for (let i = 0; i < primes.length; i++) {
      if (next[i] === min) {
        pointers[i]++;
        next[i] = primes[i] * result[pointers[i]];
      }
    }
  }

  return result[n - 1];
};