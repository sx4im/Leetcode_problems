// 427. Construct Quad Tree
/**
 * // Definition for a QuadTree node.
 * function _Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */

/**
 * @param {number[][]} grid
 * @return {_Node}
 */
var construct = function(grid) {
  return build(0, 0, grid.length);

  function build(x, y, n) {
    const value = grid[x][y];
    for (let i = x; i < x + n; i++) {
      for (let j = y; j < y + n; j++) {
        if (grid[i][j] !== value) {
          n /= 2;
          return new _Node(true, false,
            build(x, y, n),
            build(x, y + n, n),
            build(x + n, y, n),
            build(x + n, y + n, n)
          );
        }
      }
    }
    return new _Node(value === 1, true, null, null, null, null);
  }
};