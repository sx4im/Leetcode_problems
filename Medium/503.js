// 503. Next Greater Element II
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
  const total = nums.length;
  const result = new Array(total).fill(-1);
  const stack = [];

  for (let i = 0; i < 2 * total; i++) {
    while (stack.length && nums[i % total] > nums[stack[stack.length - 1]]) {
      result[stack.pop()] = nums[i % total];
    }
    stack.push(i % total);
  }

  return result;
};