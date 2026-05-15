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

//Recursive Approch

var levelOrder = function (root) {
  if (!root) return [];
  let ans = [];
  let traversal = (curr, level) => {
    if (!ans[level]) ans[level] = []; // if(ans[level]) is not present than for that ans[level] return [];
    ans[level].push(curr.val); // ans[0] = [3] , ans[1] = [9,20] , ans[2] = [15,7]
    curr.left && traversal(curr.left, level + 1);
    curr.right && traversal(curr.right, level + 1);
  };
  traversal(root, 0);
  return ans;
};
