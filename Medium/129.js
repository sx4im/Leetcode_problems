// 129. Sum Root to Leaf Numbers
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
var sumNumbers = function(root) {
    function dfs(node, currentSum) {
        if (!node) return 0;

        currentSum = currentSum * 10 + node.val;

        if (!node.left && !node.right) return currentSum;

        return dfs(node.left, currentSum) + dfs(node.right, currentSum);
    }

    return dfs(root, 0);
};
