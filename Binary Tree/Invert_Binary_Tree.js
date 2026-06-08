// Invert Binary Tree

function invertTree(root) {
  if (!root) return null;

  let queue = [root];
  while (queue.length) {
    let curr = queue.shift();
    console.log(curr);

    let temp = curr.left;
    curr.left = curr.right;
    curr.right = temp;

    curr.left && queue.push(curr.left);
    curr.right && queue.push(curr.right);
  }
  return root;
}

// Recursive Approch
function invertTree(root) {
  if (!root) return null;

  root.left = invertTree(root.left);
  root.right = invertTree(root.right);

  let temp = root.left;
  root.left = root.right;
  root.right = temp;

  return root;
}
