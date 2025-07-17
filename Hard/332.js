// 332. Reconstruct Itinerary
/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
  const graph = new Map();
  const itinerary = [];

  for (const [from, to] of tickets) {
    if (!graph.has(from)) {
      graph.set(from, []);
    }
    graph.get(from).push(to);
  }

  for (const [_, destinations] of graph) {
    destinations.sort().reverse();
  }

  dfs('JFK');

  return itinerary.reverse();

  function dfs(airport) {
    while (graph.has(airport) && graph.get(airport).length) {
      dfs(graph.get(airport).pop());
    }
    itinerary.push(airport);
  }
};