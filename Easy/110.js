// 110. Balanced Binary Tree
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
 * @return {boolean}
 */
var isBalanced = function(root) {
    const check = (node) => {
        if (!node) return [true, 0];
        let [leftBalanced, leftHeight] = check(node.left);
        let [rightBalanced, rightHeight] = check(node.right);
        let balanced = leftBalanced && rightBalanced && Math.abs(leftHeight - rightHeight) <= 1;
        return [balanced, 1 + Math.max(leftHeight, rightHeight)];
    };

    return check(root)[0];
};
