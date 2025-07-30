// 500. Keyboard Row
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
  const rows = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'];
  return words.filter(word => rows.some(row => word.toLowerCase().split('').every(s => row.includes(s))));
};