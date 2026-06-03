//  Binary Tree Maximum Path Sum

function maxPathSum(root) {
  let maxSumPath = -Infinity;
  let traversal = (curr) => {
    if (!curr) return 0;
    let leftMax = Math.max(0, traversal(curr.left));
    let rightMax = Math.max(0, traversal(curr.right));

    let currMax = curr.val + leftMax + rightMax; // calculate currMax till curr.val point add all three left ,right , curr
    maxSumPath = Math.max(currMax, maxSumPath); // which ever is max of both currMax or maxSumPath update that with maxSumPath

    return curr.val + Math.max(leftMax, rightMax); // add with cuur.val which ever is max till this curr-> right or left
  };
  traversal(root);
  return maxSumPath;
}
