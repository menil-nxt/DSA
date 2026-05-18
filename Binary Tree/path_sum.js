// path sum

function hasPathSum(root, targetSum) {
  if (!root) return false;

  if (!root.left && !root.right) {
    return root.val === targetSum;
  }

  let leftSubTreeHasPathSum = hasPathSum(root.left, targetSum - root.val);
  let rightSubTreeHasPathSum = hasPathSum(root.right, targetSum - root.val);

  return leftSubTreeHasPathSum || rightSubTreeHasPathSum;

  // Or -> return hasPathSum(root.left , targetSum - root.val) || hasPathSum(root.right , targetSum - root.val);
}

// Using Stack

function hasPathSum(root, targetSum) {
  if (!root) return false;

  // stack has two things [currNode , sum till currNode]
  const stack = [[root, root.val]];

  while (stack.length > 0) {
    const [curr, currSum] = stack.pop();

    //  if it's not a leaf node
    if (!curr.left && !curr.right) {
      if (currSum === targetSum) {
        return true;
      }
    }

    // if curr.right is exist than stack.push -> currNode(right) , and till this point currSum with also added with right node
    if (curr.right) {
      stack.push([curr.right, currSum + curr.right.val]);
    }

    if (curr.left) {
      stack.push([curr.left, currSum + curr.left.val]);
    }
  }

  return false;
}

// Recursive Call

function hasPathSum(root, targetSum) {
  if (!root) return false;
  let answer = false;
  function traversal(curr, prevSum) {
    let sum = prevSum + curr.val;
    // if left ans right both are null -> and new-sum is === target than answer -> true
    if (!curr.left && !curr.right) {
      if (sum === targetSum) {
        answer = true;
      }
    }

    // curr.left OR curr.right is exist than function call it self with new-sum
    curr.left && traversal(curr.left, sum);
    curr.right && traversal(curr.right, sum);
  }
  traversal(root, 0);
  return answer;
}
