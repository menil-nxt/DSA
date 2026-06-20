// Insert into a Binary Search Tree

// Top-Down Approch
var insertIntoBST = function (root, val) {
  if (!root) return new TreeNode(val);

  let curr = root;

  while (true) {
    if (val < curr.val) {
      if (!curr.left) {
        curr.left = new TreeNode(val);
        break;
      }
      curr = curr.left;
    } else {
      if (!curr.right) {
        curr.right = new TreeNode(val);
        break;
      }
      curr = curr.right;
    }
  }

  return root;
};

// Bottom-Up Approch
var insertIntoBST = function (root, val) {
  if (!root) return new TreeNode(val);

  if (root.val < val) {
    root.right = insertIntoBST(root.right, val);
  } else {
    root.left = insertIntoBST(root.left, val);
  }
  return root;
};
