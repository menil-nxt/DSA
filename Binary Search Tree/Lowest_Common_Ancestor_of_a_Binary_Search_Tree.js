// Lowest Common Ancestor of a Binary Search Tree

function lowestCommonAncestor(root, p, q) {
  if (q.val < root.val && p.val < root.val) {
    // Answer should be on left-side
    return lowestCommonAncestor(root.left, p, q);
  } else if (q.val > root.val && p.val > root.val) {
    // Answer should be on right-side
    return lowestCommonAncestor(root.right, p, q);
  } else {
    // if(p <= LCA <= q) & (p < q)
    return root;
  }
}
