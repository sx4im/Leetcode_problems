// 453. Minimum Moves to Equal Array Elements
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
  const min = Math.min(...nums);
  return nums.reduce((sum, num) => sum + num - min, 0);
};