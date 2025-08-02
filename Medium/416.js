// 416. Partition Equal Subset Sum
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  const sum = nums.reduce((a, b) => a + b);
  if (sum % 2) {
    return false;
  }

  const target = sum / 2;
  let set = new Set([0]);
  for (const n of nums) {
    const next = new Set(set);
    for (const value of set) {
      if (value + n === target) {
        return true;
      }
      next.add(value + n);
    }
    set = next;
  }

  return false;
};