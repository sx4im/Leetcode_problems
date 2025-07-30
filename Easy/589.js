// 589. N-ary Tree Preorder Traversal
/**
 * // Definition for a _Node.
 * function _Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
  return !root ? [] : [root.val, ...root.children.flatMap(n => preorder(n))];
};