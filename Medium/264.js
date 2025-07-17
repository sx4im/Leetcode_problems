// 264. Ugly Number II
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n, factors = [2, 3, 5], offsets = [0, 0, 0]) {
  const numbers = [1];
  while (numbers.length < n) {
    const candidates = factors.map((v, i) => numbers[offsets[i]] * v);
    const target = Math.min(...candidates);
    candidates.forEach((c, i) => target === c ? offsets[i]++ : null);
    numbers.push(target)
  }
  return numbers[n - 1];
};