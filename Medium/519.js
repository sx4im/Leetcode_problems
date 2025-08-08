// 519. Random Flip Matrix
/**
 * @param {number} m
 * @param {number} n
 */
var Solution = function(m, n) {
  this.m = m;
  this.n = n;
  this.total = m * n;
  this.flipped = new Map();
};

/**
 * @return {number[]}
 */
Solution.prototype.flip = function() {
  const index = Math.floor(Math.random() * this.total--);
  const result = this.flipped.get(index) ?? index;
  this.flipped.set(index, this.flipped.get(this.total) ?? this.total);
  return [Math.floor(result / this.n), result % this.n];
};

/**
 * @return {void}
 */
Solution.prototype.reset = function() {
  this.total = this.m * this.n;
  this.flipped.clear();
};