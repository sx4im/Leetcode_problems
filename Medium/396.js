// 396. Rotate Function
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxRotateFunction = function(nums) {
  const sum = nums.reduce((a, b) => a + b, 0);
  let current = nums.reduce((total, n, i) => total + i * n, 0);
  let result = current;

  for (let i = 1; i < nums.length; i++) {
    current = current + sum - nums.length * nums[nums.length - i];
    result = Math.max(result, current);
  }

  return result;
};