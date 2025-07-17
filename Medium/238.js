// 238. Product of Array Except Self
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const emptyResult = new Array(nums.length).fill(0);
  const zeroCount = nums.filter(n => n === 0).length;
  if (zeroCount > 1) {
    return emptyResult;
  }
  const product = nums.reduce((product, n) => product * (n === 0 ? 1 : n), 1);
  if (zeroCount === 1) {
    emptyResult[nums.indexOf(0)] = product;
    return emptyResult;
  }
  return nums.map(n => product / n);
};