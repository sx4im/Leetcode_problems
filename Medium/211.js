// 211. Design Add and Search Words Data Structure
var WordDictionary = function() {
  this.root = {};
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
  let node = this.root;

  for (const character of word) {
    node[character] = node[character] || {};
    node = node[character];
  }

  node.isTail = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
  return dfs(this.root, 0);

  function dfs(node, i) {
    if (word.length === i) {
      return node.isTail;
    }
    if (word[i] === '.') {
      for (const key in node) {
        if (dfs(node[key], i + 1)) {
          return true;
        }
      }
    } else if (node[word[i]] && dfs(node[word[i]], i + 1)) {
      return true;
    }

    return false;
  }
};