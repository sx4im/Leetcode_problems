// 229. Majority Element II
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
  const map = new Map();
  nums.forEach(n => map.set(n, (map.get(n) || 0) + 1));

  return [...map]
    .filter(([key, value]) => value > nums.length / 3)
    .map(([key]) => key);
};