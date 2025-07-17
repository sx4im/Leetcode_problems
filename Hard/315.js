// 315. Count of Smaller Numbers After Self
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {
  const result = new Array(nums.length).fill(0);
  const rank = new Map([...nums].sort((a, b) => a - b).map((n, i) => [n, i]));
  const group = new Array(nums.length + 1).fill(0);

  for (let i = nums.length - 1; i >= 0; i--) {
    const rankIndex = rank.get(nums[i]) + 1;
    for (let j = rankIndex - 1, sum = 0; j > 0; j -= j & -j) {
      sum += group[j];
      result[i] = sum;
    }
    for (let j = rankIndex; j < group.length; j += j & -j) {
      group[j]++;
    }
  }

  return result;
};