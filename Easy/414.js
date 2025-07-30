// 414. Third Maximum Number
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  const sortedSet = [...new Set(nums)].sort((a, b) => a - b);
  const thirdMax = sortedSet[sortedSet.length - 3];

  return thirdMax !== undefined
    ? thirdMax
    : sortedSet[sortedSet.length - 1];
};