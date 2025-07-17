// 228. Summary Ranges
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  const result = [];
  for (let i = 0, n = nums[0]; i < nums.length; i++) {
    if (nums[i] + 1 !== nums[i + 1]) {
      result.push(nums[i] === n ? `${n}` : `${n}->${nums[i]}`);
      n = nums[i + 1];
    }
  }
  return result;
};