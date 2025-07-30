// 599. Minimum Index Sum of Two Lists
/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
  const map = new Map(list1.map((str, index) => [str, index]));

  return list2
    .map((str, index) => map.has(str) ? [map.get(str) + index, str] : null)
    .filter(Boolean)
    .sort(([a], [b]) => a - b)
    .filter(([sum], index, [[lowest]]) => sum === lowest)
    .map(([, str]) => str);
};