// 437. Path Sum III
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
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
  if (!root) return 0;
  return (subPathSum(root, sum) + pathSum(root.left, sum) + pathSum(root.right, sum));
};

function subPathSum(node, sum) {
  if (!node) return 0;
  const self = node.val === sum ? 1 : 0;
  return self + subPathSum(node.left, sum - node.val) + subPathSum(node.right, sum - node.val);
}