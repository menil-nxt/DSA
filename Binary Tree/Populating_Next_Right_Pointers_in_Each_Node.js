// Populating Next Right Pointers in Each Node

function connect(root) {
  if (!root) return null;
  let traversal = (curr) => {
    if (curr.left) {
      // if curr.left is exist than only connect this
      curr.left.next = curr.right; // connecting (Within the same parent)
    }

    if (curr.right && curr.next) {
      // when only curr.right as well as curr.next is exist than only connect it
      curr.right.next = curr.next.left; // connecting (Across neighboring parents)
    }

    curr.left && traversal(curr.left);
    curr.right && traversal(curr.right);
  };
  traversal(root);
  return root;
}
