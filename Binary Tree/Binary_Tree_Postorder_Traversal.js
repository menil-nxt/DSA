// Binary Tree Postorder Traversal

// Recursive Approch
function postorderTraversal(root) {
  let ans = [];

  function traversal(curr) {
    // Left -> Right -> Root

    //Base case
    if (!curr) return;
    traversal(curr.left); // First Left part of tree traverse
    traversal(curr.right); // than right part of tree is traverse
    ans.push(curr.val); // than node.val is push intoo ans
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
