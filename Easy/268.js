// 268. Missing Number
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    result += i + 1 - nums[i];
  }

  return result;
};/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    result += i + 1 - nums[i];
  }

  return result;
};