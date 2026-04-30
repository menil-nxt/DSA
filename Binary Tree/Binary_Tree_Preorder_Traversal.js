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
