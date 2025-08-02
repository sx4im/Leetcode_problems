// 435. Non-overlapping Intervals
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
  let count = 0;

  intervals.sort((a, b) => a[1] - b[1]);
  let prevEnd = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    const [start, end] = intervals[i];
    if (prevEnd > start) count++;
    else prevEnd = end;
  }

  return count;
};