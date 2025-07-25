// 287. Find the Duplicate Number
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  let slow = nums[0];
  let fast = nums[nums[0]];

  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[nums[fast]];
  }
  slow = 0;
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }

  return slow;
};