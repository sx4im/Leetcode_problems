// 306. Additive Number
/**
 * @param {string} num
 * @param {Array} group
 * @param {number} startIndex
 * @return {boolean}
 */
var isAdditiveNumber = function(num, group = [], startIndex = 0) {
  if (startIndex === num.length && group.length >= 3) {
    return true;
  }

  for (let i = startIndex; i < num.length; i++) {
    if (num[startIndex] === '0' && i !== startIndex) {
      break;
    }
    const n = +num.slice(startIndex, i + 1);
    if (group[group.length - 1] + group[group.length - 2] !== n && group.length >= 2) {
      continue;
    }
    group.push(n);
    if (isAdditiveNumber(num, group, i + 1)) {
      return true;
    }
    group.pop();
  }

  return false;
};