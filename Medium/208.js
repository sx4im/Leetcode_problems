// 208. Implement Trie (Prefix Tree)
var Trie = function() {
  this.root = {};
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  let node = this.root;
  for (const char of word) {
    if (!node[char]) {
      node[char] = {};
    }
    node = node[char];
  }
  node.isWord = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  const node = this.find(word);
  return node != null && node.isWord === true;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  return this.find(prefix) !== null;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.find = function(word) {
  let node = this.root;
  for (const char of word) {
    node = node[char];
    if (!node) {
      return null;
    }
  }
  return node;
};