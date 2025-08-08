// 513. Find Bottom Left Tree Value
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function(root) {
  const queue = [root];
  let result = root.val;

  while (queue.length) {
    const size = queue.length;
    result = queue[0].val;
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return result;
};