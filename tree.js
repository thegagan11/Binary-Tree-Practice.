/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    let total = 0;
    function sum(node) {
      if (node === null) return 0;
      total += node.val;
      for (let child of node.children) {
        sum(child);
      }
  }
  sum(this.root);
  return total;
}

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    let count = 0;
    function countEven(node) {
      if (node === null) return;
      if (node.val % 2 === 0) count++;
      node.children.forEach(child => countEven(child));
  }
  countEven(this.root);
  return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    let count = 0;
    function countGreater(node) {
      if (node === null) return;
      if (node.val > lowerBound) count++;
      node.children.forEach(child => countGreater(child));
    }
    countGreater(this.root);
    return count;
  }
}

module.exports = { Tree, TreeNode };
