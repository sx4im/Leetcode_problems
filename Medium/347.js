// 347. Top K Frequent Elements
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  const map = new Map();

  nums.forEach(value => map.set(value, (map.get(value) || 0) + 1));

  return [...map]
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map(([value]) => value)
};