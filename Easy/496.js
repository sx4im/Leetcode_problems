// 496. Next Greater Element I
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  return nums1.map(n => {
    let index = nums2.indexOf(n);
    while (nums2[index] <= n) {
      index++;
    }
    return index >= nums2.length ? -1 : nums2[index];
  });
};