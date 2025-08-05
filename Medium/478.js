// 478. Generate Random Point in a Circle
/**
 * @param {number} radius
 * @param {number} x
 * @param {number} y
 */
var Solution = function(radius, x, y) {
  this.r = radius;
  this.x = x;
  this.y = y;
};

/**
 * @return {number[]}
 */
Solution.prototype.randPoint = function() {
  while (true) {
    const [x, y] = [Math.random() * 2 - 1, Math.random() * 2 - 1];
    if (x * x + y * y <= 1) {
      return [this.x + x * this.r, this.y + y * this.r];
    }
  }
};