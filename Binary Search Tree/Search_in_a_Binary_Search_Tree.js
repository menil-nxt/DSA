// Search in a Binary Search Tree

// Top Down Approch

function searchBST(root, val) {
  let ans = null;
  let traversal = (curr) => {
    if (curr.val === val) {
      // if(curr.val === val) -> ans is curr
      ans = curr;
    } else {
      if (curr.val < val) {
        // curr.val samller than val than function call with right value because val is never persent on leftend side because it's binary serch tree
        curr.right && traversal(curr.right);
      } else {
        // or call with left side if curr.val greterthan val
        curr.left && traversal(curr.left);
      }
    }
  };
  traversal(root);
  return ans;
}
