// 563. Binary Tree Tilt
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
var findTilt = function(root) {
  const result = { val: 0 };
  dfs(root, result);
  return result.val;
};

function dfs(root, tilt) {
  if (!root) return 0;
  const left = dfs(root.left, tilt);
  const right = dfs(root.right, tilt);
  tilt.val += Math.abs(left - right);
  return root.val + left + right;
}