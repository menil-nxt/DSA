// Binary Tree Level Order Traversal

// using queue
var levelOrder = function (root) {
  if (!root) return [];
  const ans = [];
  const queue = [root];

  while (queue.length > 0) {
    // Find size of queue
    const queueSize = queue.length;
    const subArr = []; // Sorting level-wise array

    // Run a loop till queue-Size
    for (let i = 0; i < queueSize; i++) {
      const curr = queue.shift();

      subArr.push(curr.val);

      if (curr.left) {
        queue.push(curr.left);
      }

      if (curr.right) {
        queue.push(curr.right);
      }
    }

    ans.push(subArr); // each iteration push subArry into answer
  }

  return ans;
};
