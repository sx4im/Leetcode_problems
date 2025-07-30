// 482. License Key Formatting
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
  const result = [];
  s = s.toUpperCase().replace(/\-+/g, '');
  if (s.length % k) {
    result.push(s.substring(0, s.length % k));
  }
  for (let i = s.length % k; i < s.length; i += k) {
    result.push(s.substring(i, i + k));
  }
  return result.join('-');
};