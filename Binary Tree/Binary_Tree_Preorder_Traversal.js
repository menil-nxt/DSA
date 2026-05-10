// Binary Tree Preorder Traversal

function preorderTraversal(root) {
  let ans = [];
  function traversal(curr) {
    //  Root -> Left -> Right;

    // Base case
    if (!curr) return;
    ans.push(curr.val);
    traversal(curr.left);
    traversal(curr.right);
  }
  traversal(root);
  return ans;
}

// Itetrative Approch

function postorderTraversal(root) {
  // corner case
  if (!root) return [];

  let ans = [];
  let stack = [root];

  while (stack.length) {
    let curr = stack.pop();
    ans.push(curr.val);
    // Only push curr.right if it is present
    curr.right && stack.push(curr.right); // For saving location we first push into stack right side of tree(node)

    curr.left && stack.push(curr.left);
  }
  return ans;
}
