// 216. Combination Sum III
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  const result = [];

  function backtrack(history, sum, start) {
    if (sum > n) return;
    if (history.length === k && sum === n) {
      result.push(history);
      return;
    }
    for (let i = start; i < 10; i++) {
      backtrack([...history, i], sum + i, i + 1);
    }
  }

  backtrack([], 0, 1);

  return result;
};