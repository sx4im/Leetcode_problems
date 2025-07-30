// 594. Longest Harmonious Subsequence
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
  const map = new Map();
  nums.forEach(n => map.set(n, (map.get(n) ?? 0) + 1));

  return Array.from(map).reduce((result, [n, count]) => {
    return map.has(n + 1) ? Math.max(result, count + map.get(n + 1)) : result;
  }, 0);
};