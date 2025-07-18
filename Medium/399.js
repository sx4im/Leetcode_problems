// 399. Evaluate Division
/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
  const map = equations.reduce((result, [a, b], index) => {
    result.set(a, [...(result.get(a) ?? []), [b, values[index]]]);
    result.set(b, [...(result.get(b) ?? []), [a, 1 / values[index]]]);
    return result;
  }, new Map());

  function traverse([a, b], seen = new Set(), current = 1) {
    if (!map.has(a) || !map.has(b)) return -1;
    if (a === b) return current;
    seen.add(a);

    for (const [key, value] of map.get(a)) {
      if (seen.has(key)) continue;
      const result = traverse([key, b], seen, current * value);
      if (result) return result;
    }
    return null;
  }

  return queries.map(item => traverse(item) ?? -1);
};