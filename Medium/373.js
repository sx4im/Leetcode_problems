// 373. Find K Pairs with Smallest Sums
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
  const minHeap = new PriorityQueue((a, b) => a[0] - b[0]);
  const result = [];
  const visited = new Set();

  minHeap.enqueue([nums1[0] + nums2[0], 0, 0]);
  visited.add('0,0');

  for (let count = 0; count < k && !minHeap.isEmpty(); count++) {
    const [currentSum, index1, index2] = minHeap.dequeue();
    result.push([nums1[index1], nums2[index2]]);

    if (index1 + 1 < nums1.length && !visited.has(`${index1 + 1},${index2}`)) {
      minHeap.enqueue([nums1[index1 + 1] + nums2[index2], index1 + 1, index2]);
      visited.add(`${index1 + 1},${index2}`);
    }

    if (index2 + 1 < nums2.length && !visited.has(`${index1},${index2 + 1}`)) {
      minHeap.enqueue([nums1[index1] + nums2[index2 + 1], index1, index2 + 1]);
      visited.add(`${index1},${index2 + 1}`);
    }
  }

  return result;
};