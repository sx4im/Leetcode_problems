/**
 * 553. Optimal Division
/**
 * @param {number[]} nums
 * @return {string}
 */
var optimalDivision = function(nums) {
    if (nums.length === 1) return nums[0].toString();
    if (nums.length === 2) return `${nums[0]}/${nums[1]}`;
    return `${nums[0]}/(${nums.slice(1).join('/')})`;
  };