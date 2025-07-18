// 337. House Robber III
/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function(root) {
  return Math.max(...traverse(root));

  function traverse(node) {
    if (!node) return [0, 0];
    const [l1, l2] = traverse(node.left);
    const [r1, r2] = traverse(node.right);
    return [node.val + l2 + r2, Math.max(l1 + r1, l2 + r2, l1 + r2, l2 + r1)];
  }
};