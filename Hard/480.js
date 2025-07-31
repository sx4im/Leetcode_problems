// 480. Sliding Window Median
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var medianSlidingWindow = function(nums, k) {
  const maxHeap = new MaxPriorityQueue();
  const minHeap = new MinPriorityQueue();
  const result = [];
  const map = {};

  for (let i = 0; i < k; i++) maxHeap.enqueue(nums[i]);
  for (let i = 0; i < k >> 1; i++) minHeap.enqueue(maxHeap.dequeue());
  for (let i = k; i <= nums.length; i++) {
    result.push(k & 1 ? maxHeap.front() : (maxHeap.front() + minHeap.front()) / 2);
    if (i === nums.length) break;
    map[nums[i - k]] = (map[nums[i - k]] || 0) + 1;
    const balance = (nums[i - k] <= maxHeap.front() ? -1 : 1)
      + (nums[i] <= maxHeap.front() ? 1 : -1);
    nums[i] <= maxHeap.front() ? maxHeap.enqueue(nums[i]) : minHeap.enqueue(nums[i]);
    balance < 0 && minHeap.size() && maxHeap.enqueue(minHeap.dequeue());
    balance > 0 && maxHeap.size() && minHeap.enqueue(maxHeap.dequeue());
    while (maxHeap.size() && map[maxHeap.front()]) map[maxHeap.dequeue()]--;
    while (minHeap.size() && map[minHeap.front()]) map[minHeap.dequeue()]--;
  }

  return result;
};