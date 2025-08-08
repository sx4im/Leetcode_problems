// 532. K-diff Pairs in an Array
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
  const map = new Map();
  let result = 0;

  for (const num of nums) {
    if (!map.has(num)) {
      if (!k) {
        map.set(num, 1);
      } else {
        if (map.has(num - k)) result++;
        if (map.has(num + k)) result++;
        map.set(num, 1);
      }
    } else if (!k && map.get(num) === 1) {
      result++;
      map.set(num, 2);
    }
  }

  return result;
};