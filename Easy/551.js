// 551. Student Attendance Record I
/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
  return !s.includes('LLL') && (s.indexOf('A') === s.lastIndexOf('A'));
};