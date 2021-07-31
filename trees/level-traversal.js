function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var levelOrder = function (root) {
  const result = [];
  if (root == null) return result;
  levelOrderTraversal(root, result);
  return result.filter((item) => item.length > 0);
};

const levelOrderTraversal = (root, result) => {
  const queue = [];
  let height = 0;

  queue.push({ node: root, level: height });

  while (queue.length > 0) {
    const currentNode = queue.shift();
    //once the current node is analyzed push to result
    if (result[currentNode.level]) {
      result[currentNode.level].push(currentNode.node.val);
    } else {
      result[currentNode.level] = [currentNode.node.val];
    }
    if (currentNode.node.left) {
      height = currentNode.level + 1;
      queue.push({ node: currentNode.node.left, level: height });
    }
    if (currentNode.node.right) {
      if (!currentNode.node.left) height = currentNode.level + 1;
      queue.push({ node: currentNode.node.right, level: height });
    }
  }
};

const constructTree = () => {
  var root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  //   root.right.left = new TreeNode(null);
  //   root.right.right = new TreeNode(5);

  return levelOrder(root);
};

console.log(constructTree());
