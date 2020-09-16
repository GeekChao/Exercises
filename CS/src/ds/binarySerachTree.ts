class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
    this.length = 0;
  }

  toObject() {
    return this.root;
  }

  add(value) {
    // no node
    if (!this.length) {
      this.root = new TreeNode(value);
      this.length++;

      return;
    }

    let curTreeNode = this.root;

    while (curTreeNode) {
      if (curTreeNode.value < value) {
        if (!curTreeNode.right) {
          curTreeNode.right = new TreeNode(value);
          this.length++;

          return;
        }

        curTreeNode = curTreeNode.right;
      } else {
        if (!curTreeNode.left) {
          curTreeNode.left = new TreeNode(value);
          this.length++;

          return;
        }

        curTreeNode = curTreeNode.left;
      }
    }
  }
}
