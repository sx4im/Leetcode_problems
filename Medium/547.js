/**
 * 547. Number of Provinces
/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    const seen = new Array(isConnected.length).fill(0);
    let result = 0;
  
    function dfs(node) {
      seen[node] = 1;
      for (let i = 0; i < isConnected.length; i++) {
        if (isConnected[node][i] === 1 && !seen[i]) {
          dfs(i);
        }
      }
    }
  
    for (let i = 0; i < isConnected.length; i++) {
      if (!seen[i]) {
        result++;
        dfs(i);
      }
    }
  
    return result;
  };