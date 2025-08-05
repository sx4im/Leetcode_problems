// 497. Random Point in Non-overlapping Rectangles
/**
 * @param {number[][]} rects
 */
var Solution = function(rects) {
  this.rects = rects;
  this.areas = rects.map(([x1, y1, x2, y2]) => (x2 - x1 + 1) * (y2 - y1 + 1));
  this.totalPoints = this.areas.reduce((sum, area) => sum + area, 0);
};

/**
 * @return {number[]}
 */
Solution.prototype.pick = function() {
  let random = Math.floor(Math.random() * this.totalPoints);
  let i = 0;
  while (random >= this.areas[i]) {
    random -= this.areas[i];
    i++;
  }
  const [x1, y1, x2, y2] = this.rects[i];
  const x = x1 + Math.floor(Math.random() * (x2 - x1 + 1));
  const y = y1 + Math.floor(Math.random() * (y2 - y1 + 1));
  return [x, y];
};