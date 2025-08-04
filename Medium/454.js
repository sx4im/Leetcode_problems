// 454. 4Sum II
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
  const map = new Map();
  nums1.forEach(n1 => {
    nums2.forEach(n2 => map.set(n1 + n2, (map.get(n1 + n2) || 0) + 1));
  });
  return nums3.reduce((count, n3) => {
    return count + nums4.reduce((sum, n4) => sum + (map.get(-(n3 + n4)) || 0), 0);
  }, 0);
};