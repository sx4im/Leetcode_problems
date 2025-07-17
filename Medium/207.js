/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  const graph = new Map();
  const seen = new Set();

  prerequisites.forEach(([course, prerequisite]) => {
    graph.set(course, graph.get(course) || []);
    graph.get(course).push(prerequisite);
  });

  function dfs(course) {
    if (seen.has(course)) {
      return false;
    }
    seen.add(course);
    for (const prerequisite of graph.get(course) || []) {
      if (!dfs(prerequisite)) return false;
    }
    seen.delete(course);
    graph.set(course, []);
    return true;
  }

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) {
      return false;
    }
  }

  return true;
};