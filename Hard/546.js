// 546. Remove Boxes
/**
 * @param {number[]} boxes
 * @return {number}
 */
var removeBoxes = function(boxes) {
  const dp = new Array(boxes.length).fill().map(() => {
    return new Array(boxes.length).fill().map(() => new Array(boxes.length + 1).fill(0));
  });
  return dfs(0, boxes.length - 1, 0);

  function dfs(l, r, k) {
    if (l > r) return 0;
    if (dp[l][r][k]) return dp[l][r][k];
    let i = l;
    let count = k + 1;
    while (i < r && boxes[i] === boxes[i + 1]) {
      i++;
      count++;
    }
    let max = count * count + dfs(i + 1, r, 0);
    for (let m = i + 1; m <= r; m++) {
      if (boxes[l] === boxes[m]) {
        max = Math.max(max, dfs(i + 1, m - 1, 0) + dfs(m, r, count));
      }
    }
    return dp[l][r][k] = max;
  }
};