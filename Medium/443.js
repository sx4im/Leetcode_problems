// 443. String Compression
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
  let pointer = 0;
  for (let i = 0; i < chars.length; i++) {
    const char = chars[i];
    let count = 0;
    while (i < chars.length && chars[i] === char) {
      count++;
      i++;
    }
    chars[pointer++] = char;
    if (count !== 1) {
      String(count).split('').forEach(n => chars[pointer++] = n);
    }
    i--;
  }
  chars.length = pointer;
  return pointer;
};