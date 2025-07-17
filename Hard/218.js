// 218. The Skyline Problem
/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkyline = function(buildings) {
  const result = [];
  const events = buildings.flatMap(([l, r, h]) => [[l, -h], [r, h]]);

  events.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

  for (let i = 0, previous = 0, heights = [0]; i < events.length; i++) {
    const [x, h] = events[i];
    if (h < 0) {
      heights.push(-h);
    } else {
      heights.splice(heights.indexOf(h), 1);
    }
    const value = Math.max(...heights);
    if (value !== previous) {
      result.push([x, previous = value]);
    }
  }

  return result;
};