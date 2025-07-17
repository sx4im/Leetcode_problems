// 295. Find Median from Data Stream
class MinHeap {
    constructor() {
        this.heap = [];
    }

    getParentIndex(i) { return Math.floor((i - 1) / 2); }
    getLeftChildIndex(i) { return 2 * i + 1; }
    getRightChildIndex(i) { return 2 * i + 2; }

    hasParent(i) { return this.getParentIndex(i) >= 0; }
    hasLeftChild(i) { return this.getLeftChildIndex(i) < this.heap.length; }
    hasRightChild(i) { return this.getRightChildIndex(i) < this.heap.length; }

    getParent(i) { return this.heap[this.getParentIndex(i)]; }
    getLeftChild(i) { return this.heap[this.getLeftChildIndex(i)]; }
    getRightChild(i) { return this.heap[this.getRightChildIndex(i)]; }

    swap(i, j) { [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]; }

    peek() {
        if (this.heap.length === 0) return null;
        return this.heap[0];
    }

    size() { return this.heap.length; }

    insert(item) {
        this.heap.push(item);
        this.heapifyUp();
    }

    extractMin() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();
        const item = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return item;
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (this.hasParent(index) && this.getParent(index) > this.heap[index]) {
            this.swap(this.getParentIndex(index), index);
            index = this.getParentIndex(index);
        }
    }

    heapifyDown() {
        let index = 0;
        while (this.hasLeftChild(index)) {
            let smallerChildIndex = this.getLeftChildIndex(index);
            if (this.hasRightChild(index) && this.getRightChild(index) < this.getLeftChild(index)) {
                smallerChildIndex = this.getRightChildIndex(index);
            }

            if (this.heap[index] < this.heap[smallerChildIndex]) {
                break;
            } else {
                this.swap(index, smallerChildIndex);
            }
            index = smallerChildIndex;
        }
    }
}

class MaxHeap extends MinHeap {
    insert(item) { super.insert(-item); }
    extractMax() {
        const val = super.extractMin();
        return val === null ? null : -val;
    }
    peek() {
        const val = super.peek();
        return val === null ? null : -val;
    }
}

var MedianFinder = function() {
    this.maxHeap = new MaxHeap();
    this.minHeap = new MinHeap();
};

MedianFinder.prototype.addNum = function(num) {
    if (this.maxHeap.size() === 0 || num <= this.maxHeap.peek()) {
        this.maxHeap.insert(num);
    } else {
        this.minHeap.insert(num);
    }

    if (this.maxHeap.size() > this.minHeap.size() + 1) {
        this.minHeap.insert(this.maxHeap.extractMax());
    } else if (this.minHeap.size() > this.maxHeap.size()) {
        this.maxHeap.insert(this.minHeap.extractMin());
    }
};

MedianFinder.prototype.findMedian = function() {
    if (this.maxHeap.size() === 0) return 0; // Handle empty case if needed

    if (this.maxHeap.size() === this.minHeap.size()) {
        return (this.maxHeap.peek() + this.minHeap.peek()) / 2;
    } else {
        return this.maxHeap.peek();
    }
};