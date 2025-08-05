// 486. Predict the Winner
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var predictTheWinner = function(nums) {
  const diff = new Array(nums.length).fill(0);

  for (let i = nums.length - 1; i >= 0; i--) {
    diff[i] = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      diff[j] = Math.max(nums[i] - diff[j], nums[j] - diff[j - 1]);
    }
  }

  return diff[nums.length - 1] >= 0;
};