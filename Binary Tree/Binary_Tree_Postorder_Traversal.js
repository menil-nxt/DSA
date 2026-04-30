// Binary Tree Postorder Traversal

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
