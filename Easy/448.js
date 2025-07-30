// 448. Find All Numbers Disappeared in an Array
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  const result = [];

  for (let i = 0; i < nums.length;) {
    if (nums[nums[i] - 1] !== nums[i]) {
      [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
    } else {
      i++;
    }
  }

  nums.forEach((v, i) => {
    if (v != i + 1) {
      result.push(i + 1);
    }
  });

  return result;
};