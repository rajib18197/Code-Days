"use strict";

class TreeNode {
  constructor(data, left, right) {
    this.data = data;
    this.left = left || null;
    this.right = right || null;
  }
}

class BinaryTree {
  constructor(arr = []) {
    this.queue = [...arr];
    this.root = this.buildTreeWithLevelOrder(this.queue);
  }

  buildTreeWithLevelOrder(dataQueue) {
    if (!dataQueue || dataQueue.length === 0) {
      return null;
    }

    const nodeQueue = [];
    const data = dataQueue.shift();
    const root = new TreeNode(data);
    nodeQueue.push(root);

    while (dataQueue.length !== 0) {
      const node = nodeQueue.shift();
      const leftData = dataQueue.shift();
      const rightData = dataQueue.shift();

      if (this.isValid(leftData)) {
        node.left = new TreeNode(leftData);
        nodeQueue.push(node.left);
      }

      if (this.isValid(rightData)) {
        node.right = new TreeNode(rightData);
        nodeQueue.push(node.right);
      }
    }

    return root;
  }

  isValid(value) {
    const inValidValues = [-1, null, undefined];
    return inValidValues.every((inValidVal) => value !== inValidVal);
  }

  preOrderTraversal(node, ans) {
    if (!node) {
      return;
    }
    ans.push(node.data);
    this.preOrderTraversal(node.left, ans);
    this.preOrderTraversal(node.right, ans);
  }

  preOrder() {
    const ans = [];
    this.preOrderTraversal(this.root, ans);
    console.log(ans);
    return ans;
  }
}

const init = function () {
  const arr = [1, 2, 3, 4, 5, 6, 7, -1, -1, 8, 9, -1, -1, -1, 10];
  const binaryTree = new BinaryTree(arr);
  binaryTree.preOrder();
};

init();
