// 239. Sliding Window Maximum
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  const result = [];
  const queue = [];

  for (let i = 0; i < nums.length; i++) {
    while (queue.length && queue[0] < i - k + 1) {
      queue.shift();
    }
    while (queue.length && nums[queue[queue.length - 1]] < nums[i]) {
      queue.pop();
    }
    queue.push(i);
    if (i >= k - 1) {
      result.push(nums[queue[0]]);
    }
  }

  return result;
};