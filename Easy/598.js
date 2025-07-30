// 598. Range Addition II
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
  let a = m;
  let b = n;

  for (const op of ops) {
    a = Math.min(a, op[0]);
    b = Math.min(b, op[1]);
  }

  return a * b;
};