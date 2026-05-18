// Maximum Depth of Binary Tree

function maxDepth(root) {
  if (!root) return 0;
  let leftMax = maxDepth(root.left);
  let rightMax = maxDepth(root.right);
  return 1 + Math.max(leftMax, rightMax);
}

function maxDepth(root) {
  if (!root) return 0;
  let maxDepth = 0;
  function traversal(curr, depth) {
    maxDepth = Math.max(maxDepth, depth); // First calculate maxDepth between ->(maxDEpth, curr.depth);
    curr.left && traversal(curr.left, depth + 1); // call curr each time with value with depth + 1
    curr.right && traversal(curr.right, depth + 1); // call curr each time with value with depth + 1
  }
  traversal(root, 1); // intially call with root so depth of root is also 1 (included)
  return maxDepth;
}
