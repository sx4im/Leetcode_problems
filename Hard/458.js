// 458. Poor Pigs
/**
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 */
var poorPigs = function(buckets, minutesToDie, minutesToTest) {
  const max = Math.floor(minutesToTest / minutesToDie) + 1;
  let result = 0;

  while (Math.pow(max, result) < buckets) {
    result++;
  }

  return result;
};