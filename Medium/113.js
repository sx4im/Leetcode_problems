// 113. Path Sum II
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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    const result = [];

    function dfs(node, path, sum) {
        if (!node) return;

        path.push(node.val);
        sum -= node.val;

        if (!node.left && !node.right && sum === 0) {
            result.push([...path]);
        }

        dfs(node.left, path, sum);
        dfs(node.right, path, sum);

        path.pop(); // backtrack
    }

    dfs(root, [], targetSum);
    return result;
};
