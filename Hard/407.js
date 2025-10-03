// 407. Trapping Rain Water II
/**
 * @param {number[][]} heightMap
 * @return {number}
 */
var trapRainWater = function(heightMap) {
  if (!heightMap || heightMap.length === 0) return 0;
  const rows = heightMap.length;
  const cols = heightMap[0].length;
  if (rows < 3 || cols < 3) return 0;

  const minHeap = []; // items are [height, r, c]

  function heapPush(item) {
    minHeap.push(item);
    let i = minHeap.length - 1;
    while (i > 0) {
      const p = Math.floor((i - 1) / 2);
      if (minHeap[i][0] < minHeap[p][0]) {
        [minHeap[i], minHeap[p]] = [minHeap[p], minHeap[i]];
        i = p;
      } else break;
    }
  }

  function heapPop() {
    const n = minHeap.length;
    if (n === 0) return null;
    if (n === 1) return minHeap.pop();
    const minItem = minHeap[0];
    minHeap[0] = minHeap.pop();
    let i = 0;
    while (true) {
      let smallest = i;
      const l = 2 * i + 1;
      const r = 2 * i + 2;
      if (l < minHeap.length && minHeap[l][0] < minHeap[smallest][0]) smallest = l;
      if (r < minHeap.length && minHeap[r][0] < minHeap[smallest][0]) smallest = r;
      if (smallest !== i) {
        [minHeap[i], minHeap[smallest]] = [minHeap[smallest], minHeap[i]];
        i = smallest;
      } else break;
    }
    return minItem;
  }

  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

  // push boundary cells
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (r === 0 || r === rows - 1 || c === 0 || c === cols - 1) {
        heapPush([heightMap[r][c], r, c]);
        visited[r][c] = true;
      }
    }
  }

  let totalWater = 0;
  const dirs = [-1, 0, 1, 0, -1];

  while (minHeap.length > 0) {
    const cur = heapPop();
    if (!cur) break;
    const [curH, r, c] = cur;

    for (let d = 0; d < 4; d++) {
      const nr = r + dirs[d];
      const nc = c + dirs[d + 1];
      if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && !visited[nr][nc]) {
        visited[nr][nc] = true;
        const nh = heightMap[nr][nc];
        if (nh < curH) totalWater += curH - nh;
        heapPush([Math.max(nh, curH), nr, nc]);
      }
    }
  }

  return totalWater;
};

