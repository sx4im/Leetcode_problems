// 213. House Robber II
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (nums.length === 1) {
    return nums[0];
  }

  return Math.max(
    handlePermutation(nums, 0, nums.length - 1),
    handlePermutation(nums, 1, nums.length)
  );
};

function handlePermutation(nums, start, end) {
  let previous = 0, current = 0;

  for (let i = start; i < end; i++) {
    const temp = previous;
    previous = current;
    current = Math.max(temp + nums[i], previous);
  }

  return Math.max(current, previous);
}
