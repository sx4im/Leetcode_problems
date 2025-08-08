// 538. Convert BST to Greater Tree
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function(root) {
  let sum = 0;
  traverse(root);
  return root;

  function traverse(node) {
    if (!node) return;
    traverse(node.right);
    sum += node.val;
    node.val = sum;
    traverse(node.left);
  }
};