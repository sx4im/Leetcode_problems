// 477. Total Hamming Distance
/**
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function(nums) {
  let result = 0;

  for (let bit = 0; bit < 32; bit++) {
    const ones = nums.reduce((count, n) => count + ((n >> bit) & 1), 0);
    result += ones * (nums.length - ones);
  }

  return result;
};