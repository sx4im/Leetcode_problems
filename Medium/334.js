// 334. Increasing Triplet Subsequence
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
  let first = Infinity;
  let second = Infinity;

  for (const current of nums) {
    if (current > second && current > first) {
      return true;
    }
    if (current > first) {
      second = current;
    } else {
      first = current;
    }
  }

  return false;
};