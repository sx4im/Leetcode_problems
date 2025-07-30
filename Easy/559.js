// 559. Maximum Depth of N-ary Tree
/**
 * @param {_Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (!root) return 0;
  if (!root.children || !root.children.length) return 1;
  return Math.max(...root.children.map(child => maxDepth(child))) + 1;
};