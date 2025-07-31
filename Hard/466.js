// 466. Count The Repetitions
/**
 * @param {string} s1
 * @param {number} n1
 * @param {string} s2
 * @param {number} n2
 * @return {number}
 */
var getMaxRepetitions = function(s1, n1, s2, n2) {
  const pattern = {};
  let s2Count = 0;
  let s2Index = 0;

  for (let i = 0; i < n1; i++) {
    for (let j = 0; j < s1.length; j++) {
      if (s1[j] === s2[s2Index]) {
        s2Index++;
        if (s2Index === s2.length) {
          s2Index = 0;
          s2Count++;
        }
      }
    }

    if (pattern[s2Index]) {
      const [prevIndex, prevCount] = pattern[s2Index];
      const remainingCycles = Math.floor((n1 - i - 1) / (i - prevIndex));
      i += remainingCycles * (i - prevIndex);
      s2Count += remainingCycles * (s2Count - prevCount);
    } else {
      pattern[s2Index] = [i, s2Count];
    }
  }

  return Math.floor(s2Count / n2);
};