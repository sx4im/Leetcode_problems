// 210. Course Schedule II
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
  const graph = Array(numCourses).fill().map(() => []);
  const seen = new Set();
  const path = new Set();
  const result = [];

  prerequisites.forEach(([c, p]) => graph[p].push(c));

  for (let i = 0; i < numCourses; i++) {
    if (!seen.has(i) && !dfs(i)) {
      return [];
    }
  }

  return result;

  function dfs(course) {
    if (path.has(course)) return false;
    if (seen.has(course)) return true;

    path.add(course);
    for (const c of graph[course]) {
      if (!dfs(c)) {
        return false;
      }
    }
    path.delete(course);
    seen.add(course);
    result.unshift(course);
    return true;
  }
};