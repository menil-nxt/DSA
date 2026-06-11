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

// Bootom Up Approch

function searchBST(root, val) {
  // Bottom Up Approch

  if (!root || root.val === val) return root; // if root(leaf) is null or root.val ==== val than return that root

  return root.val < val // if root.val is < val(root smaller than val) function call with root.right
    ? searchBST(root.right, val)
    : searchBST(root.left, val); // other wise call with root.left
}
