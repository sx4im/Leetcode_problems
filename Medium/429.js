// 429. N-ary Tree Level Order Traversal
/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) return [];

  const result = [];
  const queue = [root];

  while (queue.length) {
    const [level, current] = [queue.length, []];
    for (let i = 0; i < level; i++) {
      const node = queue.shift();
      current.push(node.val);
      queue.push(...node.children);
    }
    result.push(current);
  }

  return result;
};