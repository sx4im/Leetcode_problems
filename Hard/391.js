// 391. Perfect Rectangle
/**
 * @param {number[][]} rectangles
 * @return {boolean}
 */
var isRectangleCover = function(rectangles) {
  const result = new Set();
  let area = 0;
  let minX = Infinity;
  let maxX = -Infinity;
  let minY = Infinity;
  let maxY = -Infinity;

  for (const [x1, y1, x2, y2] of rectangles) {
    area += (x2 - x1) * (y2 - y1);
    minX = Math.min(minX, x1);
    minY = Math.min(minY, y1);
    maxX = Math.max(maxX, x2);
    maxY = Math.max(maxY, y2);
    for (const corner of [`${x1},${y1}`, `${x2},${y1}`, `${x1},${y2}`, `${x2},${y2}`]) {
      result.has(corner) ? result.delete(corner) : result.add(corner);
    }
  }

  return area === (maxX - minX) * (maxY - minY) && result.size === 4
    && result.has(`${minX},${minY}`) && result.has(`${maxX},${minY}`)
    && result.has(`${minX},${maxY}`) && result.has(`${maxX},${maxY}`);
};