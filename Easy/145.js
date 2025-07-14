// 145. Binary Tree Postorder Traversal
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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    let res = [];
    let stack = [];
    if (root) stack.push(root);

    while (stack.length) {
        let node = stack.pop();
        res.unshift(node.val); // insert at the beginning
        if (node.left) stack.push(node.left);
        if (node.right) stack.push(node.right);
    }
    return res;
};
