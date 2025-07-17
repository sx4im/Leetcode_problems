// 350. Intersection of Two Arrays II
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  const result = [];
  const map = {};

  nums1.forEach(value => map[value] = (map[value] || 0) + 1);
  nums2.forEach(value => {
    if (map[value]) {
      result.push(value);
      map[value]--;
    }
  });

  return result;
};