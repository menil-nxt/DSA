// Subtree of Another Tree

var isSubtree = function (root, subRoot) {
  let hashRoot = serialize(root);
  let hashSubRoot = serialize(subRoot);

  // FindOut hasSubRoot is subTree of hasRoot or not
  // With KMP Alogorithm we can find

  return hashRoot.includes(hashSubRoot);
};

let serialize = function (root) {
  let hash = "";
  let tarversal = (curr) => {
    if (!curr) {
      hash = hash + "-#"; // Add Delimiter at fornt when node is visited and # is represent as for null node.
      return;
    }

    hash = hash + "-" + curr.val; // handel all corner cases with add delimiter addd at front of node it's create unique Hash

    tarversal(curr.left);
    tarversal(curr.right);
  };
  tarversal(root);
  return hash;
};
