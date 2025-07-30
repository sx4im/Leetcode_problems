// 401. Binary Watch
/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function(turnedOn) {
  const result = [];

  for (let h = 0; h < 12; h++) {
    for (let m = 0; m < 60; m++) {
      if (h.toString(2).split('1').length - 1 + m.toString(2).split('1').length - 1 === turnedOn) {
        result.push(`${h}:${m < 10 ? '0' + m : m}`);
      }
    }
  }

  return result;
};