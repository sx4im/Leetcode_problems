// 514. Freedom Trail
/**
 * @param {string} ring
 * @param {string} key
 * @return {number}
 */
var findRotateSteps = function(ring, key) {
  const map = new Map();
  return dp(0, 0);

  function dp(ringIndex, keyIndex) {
    if (keyIndex === key.length) return 0;
    const state = `${ringIndex},${keyIndex}`;
    if (map.has(state)) return map.get(state);
    let minSteps = Infinity;
    for (let i = 0; i < ring.length; i++) {
      if (ring[i] === key[keyIndex]) {
        const distance = Math.abs(i - ringIndex);
        const steps = Math.min(distance, ring.length - distance);
        minSteps = Math.min(minSteps, steps + 1 + dp(i, keyIndex + 1));
      }
    }
    map.set(state, minSteps);
    return minSteps;
  }
};