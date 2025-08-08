// 539. Minimum Time Difference
/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
  const minutes = timePoints.map(time => {
    const [h, m] = time.split(':').map(Number);
    return h * 60 + m;
  }).sort((a, b) => a - b);
  let diff = Infinity;

  for (let i = 1; i < minutes.length; i++) {
    diff = Math.min(diff, minutes[i] - minutes[i - 1]);
  }

  return Math.min(diff, 1440 - minutes[minutes.length - 1] + minutes[0]);
};