// Validate Binary Search Tree

// Another way with only one function we can write
function isValidBST(curr, lower = null, higher = null) {
  if (!curr) return true; // null(leaf node) is always return true

  if (
    (lower != null && lower >= curr.val) ||
    (higher != null && higher <= curr.val)
  ) {
    // always lower limit is samller than curr.val && always higher limit is greterthen curr.val otherwise it's not binary serach subtree OR tree
    return false;
  }

  let isLeftTree = isValidBST(curr.left, lower, curr.val); // call with left , lower limit , higer limit is cuur.val
  let isRightTree = isValidBST(curr.right, curr.val, higher); // call with left , lower limit is curr.val, higer limit

  return isLeftTree && isRightTree; // return if both is true than only return true otherwise false
}

function isValidBST(root) {
  let isBST = (curr, lower, higher) => {
    if (!curr) return true; // null(leaf node) is always return true

    if (
      (lower != null && lower >= curr.val) ||
      (higher != null && higher <= curr.val)
    ) {
      // always lower limit is samller than curr.val && always higher limit is greterthen curr.val otherwise it's not binary serach subtree OR tree
      return false;
    }

    let isLeftTree = isBST(curr.left, lower, curr.val); // call with left , lower limit , higer limit is cuur.val
    let isRightTree = isBST(curr.right, curr.val, higher); // call with left , lower limit is curr.val, higer limit

    return isLeftTree && isRightTree; // return if both is true than only return true otherwise false
  };

  return isBST(root, null, null);
}
