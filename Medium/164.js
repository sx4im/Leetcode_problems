// 164. Maximum Gap
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
    if (nums.length < 2) return 0;

    let minNum = Math.min(...nums);
    let maxNum = Math.max(...nums);

    if (minNum === maxNum) return 0; // All numbers are the same

    let n = nums.length;
    let bucketSize = Math.max(1, Math.floor((maxNum - minNum) / (n - 1)));
    let bucketCount = Math.floor((maxNum - minNum) / bucketSize) + 1;

    // Initialize buckets
    let buckets = Array.from({ length: bucketCount }, () => ({
        min: Infinity,
        max: -Infinity
    }));

    // Place numbers in buckets
    for (let num of nums) {
        let idx = Math.floor((num - minNum) / bucketSize);
        buckets[idx].min = Math.min(buckets[idx].min, num);
        buckets[idx].max = Math.max(buckets[idx].max, num);
    }

    // Calculate max gap
    let maxGap = 0;
    let prevMax = minNum;

    for (let bucket of buckets) {
        if (bucket.min === Infinity) continue; // skip empty buckets
        maxGap = Math.max(maxGap, bucket.min - prevMax);
        prevMax = bucket.max;
    }

    return maxGap;
};
