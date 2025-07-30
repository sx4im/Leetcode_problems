// 590. N-ary Tree Postorder Traversal
/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
  const result = [];
  traverse(root);
  return result;

  function traverse(node) {
    if (!node) return;
    node.children.forEach(child => traverse(child));
    result.push(node.val);
  }
};