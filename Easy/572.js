// 572. Subtree of Another Tree
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
  return traverse(root).includes(traverse(subRoot));
  function traverse(node) {
    return !node ? '#' : `,${node.val},${traverse(node.left)},${traverse(node.right)}`;
  }
};