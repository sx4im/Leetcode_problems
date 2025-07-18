// 393. UTF-8 Validation
/**
 * @param {number[]} data
 * @return {boolean}
 */
var validUtf8 = function(data) {
  let result = 0;

  for (const n of data) {
    if (result === 0) {
      if (n >> 7 === 0) result = 0;
      else if (n >> 5 === 0b110) result = 1;
      else if (n >> 4 === 0b1110) result = 2;
      else if (n >> 3 === 0b11110) result = 3;
      else return false;
    } else {
      if (n >> 6 !== 0b10) return false;
      result--;
    }
  }

  return result === 0;
};