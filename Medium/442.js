// 442. Find All Duplicates in an Array
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
  const result = [];

  nums.forEach((num, i) => {
    const key = Math.abs(num) - 1;
    if (nums[key] < 0) {
      result.push(Math.abs(num));
    } else {
      nums[key] *= -1;
    }
  });

  return result;
};