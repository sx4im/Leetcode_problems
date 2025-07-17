// 321. Create Maximum Number
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 */
var maxNumber = function(nums1, nums2, k) {
  const m = nums1.length;
  const n = nums2.length;
  let result = new Array(k).fill(0);

  for (let i = Math.max(0, k - n); i <= Math.min(k, m); i++) {
    if (i + n < k) continue;
    const candidate = merge(
      getMaxSubsequence(nums1, i),
      getMaxSubsequence(nums2, k - i),
    );
    result = candidate > result ? candidate : result;
  }

  return result;

  function getMaxSubsequence(nums, count) {
    const stack = [];
    let removeIndex = nums.length - count;

    nums.forEach(n => {
      while (stack.length && stack[stack.length - 1] < n && removeIndex) {
        stack.pop();
        removeIndex--;
      }
      stack.push(n);
    });

    return stack.slice(0, count);
  }

  function merge(a1, a2) {
    const result = [];

    while (a1.length || a2.length) {
      const compare = a1 > a2 ? a1 : a2;
      result.push(compare[0]);
      compare.shift();
    }

    return result;
  }
};