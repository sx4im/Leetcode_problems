// 331. Verify Preorder Serialization of a Binary Tree
/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function(preorder) {
  let result = 1;
  for (const node of preorder.split(',')) {
    if (result) {
      result += node === '#' ? -1 : 1;
    } else {
      return false;
    }
  }
  return result < 1;
};