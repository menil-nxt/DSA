// Priority Queue suing priority queue

class priorityQueue {
  constructor() {
    this.pq = [];
  }

  enqueue(value, priority) {
    this.pq.push({ value, priority });
    this.pq.sort((a, b) => b.priority - a.priority); // higher value on the first position in queue means higher priority is fisrt at queue.

    // only in this algorithm due to sorting time compexity is increses.
  }

  dequeue() {
    return this.pq.shift();
    // remove first element form the queue
  }

  peek() {
    return this.pq[0];
  }

  isEmpty() {
    return this.pq.length === 0;
  }
}

let priority = new priorityQueue();

priority.enqueue("heart Atteck", 5);
priority.enqueue("flu", 2);
priority.enqueue("eye pain", 3.5);
priority.enqueue("accident", 4);

console.log("peek", priority.peek());

console.log("shift", priority.dequeue());
console.log("peek", priority.peek());

console.log("shift", priority.dequeue());
console.log("peek", priority.peek());

console.log("shift", priority.dequeue());
console.log("peek", priority.peek());

console.log("Empty", priority.isEmpty());

console.log("shift", priority.dequeue());
console.log("peek", priority.peek());

console.log("Empty", priority.isEmpty());
