// 494. Target Sum
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
  const map = new Map();

  function dp(index, sum) {
    if (index === nums.length) {
      return sum === target ? 1 : 0;
    }
    const key = `${index},${sum}`;
    if (map.has(key)) {
      return map.get(key);
    }
    const r = dp(index + 1, sum + nums[index]) + dp(index + 1, sum - nums[index]);
    map.set(key, r);
    return r;
  }

  return dp(0, 0);
};