// 236. Lowest Common Ancestor of a Binary Tree
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  if (!root || root === p || root === q) return root;
  const [l, r] = [lowestCommonAncestor(root.left, p, q), lowestCommonAncestor(root.right, p, q)];
  return l && r ? root : l ?? r;
};