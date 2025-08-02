// 421. Maximum XOR of Two Numbers in an Array
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function(nums) {
  let result = 0;

  for (let i = 31, mask = 0; i >= 0; i--) {
    mask |= (1 << i);
    const set = new Set(nums.map(num => num & mask));
    const target = result | (1 << i);
    for (const prefix of set) {
      if (set.has(prefix ^ target)) {
        result = target;
        break;
      }
    }
  }

  return result;
};