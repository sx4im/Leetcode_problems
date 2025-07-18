// 385. Mini Parser
/**
 * @param {string} s
 * @return {NestedInteger}
 */
var deserialize = function(s) {
  return traverse(JSON.parse(s));

  function traverse(str) {
    if (Number.isInteger(str)) {
      return new NestedInteger(str);
    }
    const value = new NestedInteger();
    for (const s of str) {
      value.add(traverse(s));
    }
    return value;
  };
};