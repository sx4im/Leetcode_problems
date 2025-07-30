// 506. Relative Ranks
/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
  const PLACEMENTS = ['Gold Medal', 'Silver Medal', 'Bronze Medal'];
  const map = new Map();
  score.forEach((rank, index) => map.set(rank, index));

  const result = score.slice();
  const sorted = [...map].sort(([a], [b]) => b - a);

  sorted.forEach(([_, index], rank) => {
    result[index] = PLACEMENTS[rank] || `${rank + 1}`;
  });

  return result;
};