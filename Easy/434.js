// 434. Number of Segments in a String
/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
  return s.split(/\s+/).filter(s => s).length;
};