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

// Iterative Approch - using two stack
function postorderTraversal(root) {
  if (!root) return [];

  let s1 = [root];
  let s2 = [];

  while (s1.length) {
    let curr = s1.pop(); // pop out from s1 and push it into s2
    s2.push(curr);
    curr.left && s1.push(curr.left); // than if curr is exist than curr.child push into s1
    curr.right && s1.push(curr.right);
  }

  let ans = []; // convert stack into array with value. -> reverse stack
  while (s2.length) {
    ans.push(s2.pop().val);
  }
  return ans;
}

// Iterative Approch - using one stack
function postorderTraversal(root) {
  let ans = [];
  let stack = [];
  let curr = root;
  let lastVisited = null;

  while (curr || stack.length) {
    // push all values to stack till i reach leftmost bottom
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }
    // peeking topOfStack element
    let topOfStack = stack[stack.length - 1];
    // if right exists & it is not last visited
    if (topOfStack.right && topOfStack.right != lastVisited) {
      curr = topOfStack.right;
    } else {
      ans.push(topOfStack.val);
      lastVisited = stack.pop();
    }
  }
  return ans;
}
