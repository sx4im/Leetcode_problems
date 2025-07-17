// 235. Lowest Common Ancestor of a Binary Search Tree
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  if (p.val > root.val && q.val > root.val) {
    return lowestCommonAncestor(root.right, p, q);
  }
  if (p.val < root.val && q.val < root.val) {
    return lowestCommonAncestor(root.left, p , q);
  }
  return root;
};