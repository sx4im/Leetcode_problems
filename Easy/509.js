// 509. Fibonacci Number
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
  const nums = [0, 1];

  for (let i = 2; i <= n; i++) {
    nums.push(nums[i - 2] + nums[i - 1]);
  }

  return nums[n];
};