// 230. Kth Smallest Element in a BST
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  const result = [];
  dfs(root);
  return result[k - 1];

  function dfs(node) {
    if (!node || result.length > k) return null;
    dfs(node.left);
    result.push(node.val);
    dfs(node.right);
  }
};