/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (!this.root) return 0;

    function depth(node) {
      if (node === null) return Infinity;
      if (node.left === null && node.right === null) return 1;
      return Math.min(depth(node.left), depth(node.right)) + 1;
  }
    return depth(this.root);
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (!this.root) return 0;
    function depth(node) {
      if (node === null) return 0;
      return Math.mad(depth(node.left), depth(node.right)) + 1;
  }
  return depth(this.root);
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let max = Number.MIN_SAFE_INTEGER;

    function findMax(node) {
      if (node === null) return 0;

      let leftMax = Math.max(0, findMax(node.left));
      let rightMax = Math.max(0, findMax(node.right));

      max = Math.max(max, node.val + leftMax + rightMax);

      return node.val + Math.max(leftMax + rightMax)
  }
  findMax(this.root);
  return max;
}

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    let result = null;

    function findLarger(node) {
      if (node === null) return null;

      if (node.val > lowerBound && (result === null || node.val < result)) {
        result = node.val;
      }

      findNextLarger(node.left);
      findNextLarger(node.right);
  }

  findNextLarger(this.root);
  return result;
}

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {
    function findDepthAndParent(node, target, dept = 0, parent = null) {
      if (node === null) return null;
      if (node === target) return { dept, parent };

      let left = findDepthAndParent(node.left, target, dept + 1, node);
      let right = findDepthAndParent(node.right, target, dept + 1, node);

      return left || right;
  }

  let node1Info = findDepthAndParent(this.root, node1);
  let node2Info = findDepthAndParent(this.root, node2);

  return node1Info && node2Info &&
          node1Info.depth === node2Info.depth &&
          node1Info.parent !== node2Info.parent;
}

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize(tree) {
    if (!tree.root) return '';
  
    let result = [];
    let queue = [tree.root];
  
    while (queue.length) {
      let node = queue.shift();
      if (node) {
        result.push(node.val);
        queue.push(node.left);
        queue.push(node.right);
      } else {
        result.push(null);
      }
    }
  
    return JSON.stringify(result);
  }
  

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize(string) {
    if (!string) return new BinaryTree();
  
    let values = JSON.parse(string);
    let root = new BinaryTreeNode(values.shift());
    let queue = [root];
  
    while (queue.length) {
      let node = queue.shift();
      let leftVal = values.shift();
      let rightVal = values.shift();
  
      if (leftVal !== null) {
        node.left = new BinaryTreeNode(leftVal);
        queue.push(node.left);
      }
  
      if (rightVal !== null) {
        node.right = new BinaryTreeNode(rightVal);
        queue.push(node.right);
      }
    }
  
    return new BinaryTree(root);
  }
  
  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    function LCA(node, n1, n2) {
      if (node === null) return null;
      if (node === n1 || node === n2) return node;
  
      let left = LCA(node.left, n1, n2);
      let right = LCA(node.right, n1, n2);
  
      if (left !== null && right !== null) return node;
      return left || right;
    }
  
    return LCA(this.root, node1, node2);
  }
  

module.exports = { BinaryTree, BinaryTreeNode };
