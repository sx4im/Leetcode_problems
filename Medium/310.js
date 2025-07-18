// 310. Minimum Height Trees
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
  if (n === 1) return [0];

  const lookup = new Array(n).fill().map(() => new Set());
  for (const [a, b] of edges) {
    lookup[a].add(b);
    lookup[b].add(a);
  }

  let result = [];
  for (let i = 0; i < n; i++) {
    if (lookup[i].size === 1) result.push(i);
  }

  while (n > 2) {
    n -= result.length;
    const modified = [];
    for (const item of result) {
      const adj = lookup[item].values().next().value;
      lookup[adj].delete(item);
      if (lookup[adj].size === 1) {
        modified.push(adj);
      }
    }
    result = modified;
  }

  return result;
};