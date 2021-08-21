
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

 function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }
 var minDepth = function(root) {
     if(root == null) return 0;
     const result = [Number.MAX_SAFE_INTEGER];
     depthHelper(root, 1, result);
     return result[0];
};

const depthHelper = (node, ch, minHeight) => {
    if(isLeaf(node)) {
        if(ch < minHeight) {
            minHeight[0] = ch;
        }
        return;
    };
    if(node.left)
        depthHelper(node.left, ch + 1, minHeight);
    if(node.right)
        depthHelper(node.right, ch + 1, minHeight);
}

const isLeaf = (node) => {
    if(!node.left && !node.right) return true;
    if(node.left?.val == null && node.right?.val == null) return true;
    else return false;
}

const root = new TreeNode(5);
root.left = new TreeNode(3);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);

minDepth(root)