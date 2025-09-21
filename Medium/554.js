/**
 * 554. Brick Wall
/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function(wall) {
    const map = new Map();
    let max = 0;
  
    for (const row of wall) {
      for (let i = 0, sum = 0; i < row.length - 1; i++) {
        sum += row[i];
        map.set(sum, (map.get(sum) || 0) + 1);
        max = Math.max(max, map.get(sum));
      }
    }
  
    return wall.length - max;
  };