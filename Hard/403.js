// 403. Frog Jump
/**
 * @param {number[]} stones
 * @return {boolean}
 */
var canCross = function(stones) {
  const dp = new Map();
  stones.forEach(stone => dp.set(stone, new Set()));
  dp.get(0).add(0);

  for (let i = 0; i < stones.length; i++) {
    const curr = stones[i];
    for (const prevJump of dp.get(curr)) {
      for (const jump of [prevJump - 1, prevJump, prevJump + 1]) {
        if (jump > 0 && dp.has(curr + jump)) {
          dp.get(curr + jump).add(jump);
        }
      }
    }
  }

  return dp.get(stones[stones.length - 1]).size > 0;
};