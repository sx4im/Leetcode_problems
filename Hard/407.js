// 407. Trapping Rain Water II
/**
 * A simple Min-Heap to store cells by their height.
 * Stores data as [height, row, col].
 */
class MinHeap {
  constructor() {
    this.heap = [null]; // Start at index 1 for easier math
  }

  enqueue(val) {
    this.heap.push(val);
    if (this.heap.length > 2) {
      let idx = this.heap.length - 1;
      let parentIdx = Math.floor(idx / 2);
      // Sift-up: move the new element up the heap
      while (idx > 1 && this.heap[idx][0] < this.heap[parentIdx][0]) {
        [this.heap[parentIdx], this.heap[idx]] = [this.heap[idx], this.heap[parentIdx]];
        idx = parentIdx;
        parentIdx = Math.floor(idx / 2);
      }
    }
  }

  dequeue() {
    if (this.heap.length <= 1) return null;
    if (this.heap.length === 2) return this.heap.pop();
    
    const smallest = this.heap[1];
    this.heap[1] = this.heap.pop();
    let idx = 1;
    
    // Sift-down: move the top element down to its correct spot
    while (true) {
      let leftChildIdx = idx * 2;
      let rightChildIdx = idx * 2 + 1;
      let smallestChildIdx = null;

      if (this.heap[leftChildIdx]) {
        smallestChildIdx = leftChildIdx;
      }
      if (this.heap[rightChildIdx] && this.heap[rightChildIdx][0] < this.heap[leftChildIdx][0]) {
        smallestChildIdx = rightChildIdx;
      }

      if (smallestChildIdx && this.heap[idx][0] > this.heap[smallestChildIdx][0]) {
        [this.heap[idx], this.heap[smallestChildIdx]] = [this.heap[smallestChildIdx], this.heap[idx]];
        idx = smallestChildIdx;
      } else {
        break;
      }
    }
    return smallest;
  }

  isEmpty() {
    return this.heap.length <= 1;
  }
}

/**
 * @param {number[][]} heightMap
 * @return {number}
 */
var trapRainWater = function(heightMap) {
  // Edge case for invalid or empty maps
  if (!heightMap || heightMap.length === 0 || heightMap[0].length === 0) {
    return 0;
  }

  const rows = heightMap.length;
  const cols = heightMap[0].length;
  const minHeap = new MinHeap();
  const visited = new Array(rows).fill(0).map(() => new Array(cols).fill(false));

  // 1. Add all border cells to the heap
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (i === 0 || i === rows - 1 || j === 0 || j === cols - 1) {
        minHeap.enqueue([heightMap[i][j], i, j]);
        visited[i][j] = true;
      }
    }
  }

  let waterTrapped = 0;
  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];

  // 2. Process cells, expanding inwards from the lowest-height walls
  while (!minHeap.isEmpty()) {
    const [height, r, c] = minHeap.dequeue();

    for (const [dr, dc] of directions) {
      const newR = r + dr;
      const newC = c + dc;

      if (newR >= 0 && newR < rows && newC >= 0 && newC < cols && !visited[newR][newC]) {
        const neighborHeight = heightMap[newR][newC];
        
        // 3. Trapped water is the difference between the wall and the lower neighbor
        waterTrapped += Math.max(0, height - neighborHeight);
        
        // 4. Add the neighbor to the heap, making it part of the new "wall"
        minHeap.enqueue([Math.max(height, neighborHeight), newR, newC]);
        visited[newR][newC] = true;
      }
    }
  }

  return waterTrapped;
};