// Kth Smallest Element in a BST

// run after kth element is found
function kthSmallest(root, k) {
  let ans = null;
  let count = k;
  const traversal = (curr) => {
    // Allways Inorder traversal of BST is Sorted so we have to just do inorder traversal and return kth element
    // Inorder traversal -> left - root - Right

    curr.left && traversal(curr.left);

    count = count - 1; // every curr element we decrease our count and when count is 0 so that is our answer
    if (count == 0) {
      ans = curr.val;
    }
    curr.right && traversal(curr.right);
  };
  traversal(root);
  return ans;
}

// optimising call recursive function till only kth element is found
function kthSmallest(root, k) {
  let ans = null;
  let count = k;
  const traversal = (curr) => {
    // Allways Inorder traversal of BST is Sorted so we have to just do inorder traversal and return kth element
    // Inorder traversal -> left - root - Right
    if (ans != null) return;
    curr.left && traversal(curr.left);

    count = count - 1; // every curr element we decrease our count and when count is 0 so that is our answer
    if (count == 0) {
      ans = curr.val;
    }
    curr.right && traversal(curr.right);
  };
  traversal(root);
  return ans;
}
