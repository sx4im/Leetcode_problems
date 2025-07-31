// 587. Erect the Fence
/**
 * @param {number[][]} trees
 * @return {number[][]}
 */
var outerTrees = function(trees) {
  const a = [];
  const b = [];

  trees.sort(([x1, y1], [x2, y2]) => x1 === x2 ? y1 - y2 : x1 - x2);
  for (const point of trees) {
    while (a.length >= 2 && cross(a[a.length - 2], a[a.length - 1], point) < 0) {
      a.pop();
    }
    a.push(point);
    while (b.length >= 2 && cross(b[b.length - 2], b[b.length - 1], point) > 0) {
      b.pop();
    }
    b.push(point);
  }

  return [...new Set([...a, ...b].map(p => JSON.stringify(p)))].map(p => JSON.parse(p));

  function cross(p, q, r) {
    return (q[0] - p[0]) * (r[1] - p[1]) - (q[1] - p[1]) * (r[0] - p[0]);
  }
};