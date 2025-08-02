// 413. Arithmetic Slices
/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function(nums) {
  if (nums.length < 3) return 0;
  let result = 0;

  for (let i = 2, value = 0; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] === nums[i - 1] - nums[i - 2]) {
      value++;
      result += value;
    } else {
      value = 0;
    }
  }

  return result;
};