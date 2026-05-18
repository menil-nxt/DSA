// Symmetric Tree

// Recursive Approch
function isSymmetric(root) {
  let isMirror = (left, right) => {
    // if leaf is present than return true
    if (!left && !right) return true;

    // ifany of is not present than return false because in mirror side element is not persent
    if (!left || !right) return false;

    return (
      left.val === right.val &&
      isMirror(left.left, right.right) && // call with left of left || right of right and
      isMirror(left.right, right.left)
    ); // call with left of right || right of left
  };

  return isMirror(root.left, root.right);
}
