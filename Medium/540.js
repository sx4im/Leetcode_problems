// 540. Single Element in a Sorted Array
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let middle = left + Math.floor((right - left) / 2);
    middle = middle - (middle % 2);
    if (nums[middle] === nums[middle + 1]) {
      left = middle + 2;
    } else {
      right = middle;
    }
  }

  return nums[left];
};