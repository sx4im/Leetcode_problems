// 354. Russian Doll Envelopes
/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
  const result = [];

  envelopes.sort((a, b) => a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]);
  envelopes.forEach(([_, h]) => {
    let left = 0;
    let right = result.length;
    while (left < right) {
      const middle = Math.floor((left + right) / 2);
      if (result[middle] >= h) {
        right = middle;
      } else {
        left = middle + 1;
      }
    }
    if (left === result.length) {
      result.push(h);
    } else {
      result[left] = h;
    }
  });

  return result.length;
};