// 530. Minimum Absolute Difference in BST
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
 * @return {number}
 */
var getMinimumDifference = function(root) {
  let result = Infinity;
  let previous = null;

  inorder(root);
  return result;

  function inorder(node) {
    if (!node) return;
    inorder(node.left);
    result = previous === null ? result : Math.min(result, node.val - previous);
    previous = node.val;
    inorder(node.right);
  }
};