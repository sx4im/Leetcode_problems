// 543. Diameter of Binary Tree
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
var diameterOfBinaryTree = function(root) {
  let result = 0;
  maxDepth(root);
  return result;

  function maxDepth(node) {
    if (!node) return 0;
    const left = maxDepth(node.left);
    const right = maxDepth(node.right);
    result = Math.max(result, left + right);
    return Math.max(left, right) + 1;
  }
};