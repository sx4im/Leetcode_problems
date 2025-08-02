// 406. Queue Reconstruction by Height
/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
  return people
    .sort(([h1, k1], [h2, k2]) => h2 - h1 || k1 - k2)
    .reduce((queue, person) => queue.splice(person[1], 0, person) && queue, []);
};