// 457. Circular Array Loop
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var circularArrayLoop = function(nums) {
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    if (dfs(i, i, nums[i] > 0)) return true;
  }

  return false;

  function dfs(current, prev, flag) {
    if (nums[current] === 0) return current != prev;
    if (flag != (nums[current] > 0)) return false;
    const moves = nums[current];
    nums[current] = 0;
    const next = (current + (moves % n) + n) % n;
    const result = dfs(next, current, flag);
    nums[current] = moves;
    return result;
  }
};