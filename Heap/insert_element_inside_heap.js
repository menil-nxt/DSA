// Insert element inside heap

// craeting MinHeap

class MinHeap {
  constructor() {
    this.heap = [];
  }
  getLeftChildIndex() {
    return 2 * i + 1;
  }
  getRightChildIndex() {
    return 2 * i + 2;
  }
  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }
  insert(val) {
    this.heap.push(val);
    let lastIndex = this.heap.length - 1;
    this.heapfyUp(lastIndex);
  }
  heapfyUp(i) {
    while (i > 0) {
      let parentIndex = this.getParentIndex(i);
      if (this.heap[i] < this.heap[parentIndex]) {
        [this.heap[i], this.heap[parentIndex]] = [
          this.heap[parentIndex],
          this.heap[i],
        ];
        i = parentIndex;
      } else {
        break;
      }
    }
  }
}

let heap = new MinHeap();
heap.insert(2);
heap.insert(0);
heap.insert(10);
heap.insert(67);
heap.insert(23);
heap.insert(34);
heap.insert(37);
heap.insert(34);
heap.insert(56);
heap.insert(27);
heap.insert(7);

console.log(heap);
