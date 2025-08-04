// 456. 132 Pattern
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
  const stack = [];

  for (let i = nums.length - 1, j = -Infinity; i >= 0; i--) {
    while (nums[i] > stack[stack.length - 1]) {
      j = stack.pop();
    }
    if (nums[i] < j) {
      return true;
    }
    stack.push(nums[i]);
  }

  return false;
};