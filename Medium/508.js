// 508. Most Frequent Subtree Sum
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findFrequentTreeSum = function(root) {
  if (!root) return [];

  const map = new Map();
  let result = [];
  let max = 0;

  traverse(root);

  for (const [sum, freq] of map) {
    if (freq > max) {
      max = freq;
      result = [sum];
    } else if (freq === max) {
      result.push(sum);
    }
  }

  return result;

  function traverse(node) {
    if (!node) return 0;
    const sum = node.val + traverse(node.left) + traverse(node.right);
    map.set(sum, (map.get(sum) || 0) + 1);
    return sum;
  }
};