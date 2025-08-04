// 452. Minimum Number of Arrows to Burst Balloons
/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
  let result = 0;
  let i = 0;

  points.sort(([a], [b]) => a - b);

  while (i < points.length) {
    let [left, right] = points[i];
    i++;
    while (i < points.length && points[i][0] <= right && points[i][1] >= left) {
      left = Math.max(left, points[i][0]);
      right = Math.min(right, points[i][1]);
      i++;
    }
    result++;
  }

  return result;
};