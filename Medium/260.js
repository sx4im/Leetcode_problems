// 260. Single Number III
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
  const set = new Set();
  nums.forEach(n => set.has(n) ? set.delete(n) : set.add(n));
  return Array.from(set);
};