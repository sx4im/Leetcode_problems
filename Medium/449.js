// 449. Serialize and Deserialize BST
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  if (!root) return '';

  const result = [];
  preorder(root);
  return result.join(',');

  function preorder(node) {
    if (!node) return;
    result.push(node.val);
    preorder(node.left);
    preorder(node.right);
  }
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  if (!data) return null;

  return buildBST(data.split(',').map(Number), 0, Infinity);

  function buildBST(input, min, max) {
    if (!input.length || input[0] < min || input[0] > max) return null;
    const val = input.shift();
    const root = new TreeNode(val);
    root.left = buildBST(input, min, val);
    root.right = buildBST(input, val, max);
    return root;
  }
};