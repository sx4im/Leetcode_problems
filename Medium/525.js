// 525. Contiguous Array
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
  const map = new Map([[0, -1]]);
  let result = 0;

  for (let i = 0, count = 0; i < nums.length; i++) {
    count += nums[i] === 1 ? 1 : -1;
    if (map.has(count)) {
      result = Math.max(result, i - map.get(count));
    } else {
      map.set(count, i);
    }
  }

  return result;
};