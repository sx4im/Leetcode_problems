// 436. Find Right Interval
/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function(intervals) {
  const lookup = intervals.map(([start], i) => [start, i])
    .sort((a, b) => a[0] - b[0]);
  const result = new Array(intervals.length);

  for (let i = 0; i < intervals.length; i++) {
    const target = intervals[i][1];
    let left = 0;
    let right = lookup.length - 1;

    while (left <= right) {
      const middle = Math.floor((left + right) / 2);
      if (lookup[middle][0] >= target) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    }

    result[i] = left < lookup.length ? lookup[left][1] : -1;
  }

  return result;
};