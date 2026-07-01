// craeting MinHeap

class MinHeap {
  constructor() {
    this.heap = [];
  }
  getLeftChildIndex(i) {
    return 2 * i + 1;
  }
  getRightChildIndex(i) {
    return 2 * i + 2;
  }
  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }
  insert(val) {
    this.heap.push(val);
    let lastIndex = this.heap.length - 1;
    this.heapifyUp(lastIndex);
  }
  heapifyUp(i) {
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

  extract() {
    // if heap is empty than return null
    if (this.heap.length < 1) return null;

    let min = this.heap[0];
    let lastIndex = this.heap.length - 1;

    // lastIndex of heap replaced with first index
    [this.heap[0], this.heap[lastIndex]] = [this.heap[lastIndex], this.heap[0]];

    // remove lastindex
    this.heap.pop(); // last element of heap is removed (LIFO) Array

    // heapfyDown process is start
    this.heapifyDown(0);

    return min;
  }

  heapifyDown(i) {
    // root - leftChild - rightChild which ever is small replace with root.
    let leftIndex = this.getLeftChildIndex(i);
    let rightIndex = this.getRightChildIndex(i);
    let n = this.heap.length;

    let smallest = i;

    if (leftIndex < n && this.heap[leftIndex] < this.heap[smallest]) {
      smallest = leftIndex;
    }
    if (rightIndex < n && this.heap[rightIndex] < this.heap[smallest]) {
      smallest = rightIndex;
    }
    // swap smallest with i
    if (smallest != i) {
      [this.heap[smallest], this.heap[i]] = [this.heap[i], this.heap[smallest]];
      this.heapifyDown(smallest);
    }
  }

  peek() {
    if (!this.heap.length) return null;
    return this.heap[0];
  }
}

let heap = new MinHeap();
heap.insert(2);
heap.insert(0);
heap.insert(10);
heap.insert(67);
heap.insert(23);
heap.insert(34);
console.log("peek -", heap.peek());
heap.insert(37);
heap.insert(34);
heap.insert(56);
heap.insert(27);
heap.insert(7);
console.log("peek -", heap.peek());
console.log(heap.extract());
console.log(heap.extract());
console.log(heap.extract());
console.log("peek -", heap.peek());

console.log(heap);
