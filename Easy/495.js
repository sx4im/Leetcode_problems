// 495. Teemo Attacking
/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
  return timeSeries.reduce((sum, n, i) => {
    return sum + Math.min(duration, (timeSeries[i + 1] ?? n + duration) - n);
  }, 0);
};