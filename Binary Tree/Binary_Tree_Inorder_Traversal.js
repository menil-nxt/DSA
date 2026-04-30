// Binary Tree Inorder Traversal

function inorderTraversal(root) {
  let ans = [];

  function traversal(curr) {
    // Left -> Root -> Right

    // Base Case
    if (!curr) return;

    traversal(curr.left); // left Part of Tree first traverse
    ans.push(curr.val); // add that left part of trees node.val into ans than
    traversal(curr.right); // right part of tree is traverse
  }

  traversal(root);
  return ans;
}
