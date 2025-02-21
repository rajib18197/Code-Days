"use strict";

class TreeNode {
  constructor(data, left, right) {
    this.data = data;
    this.left = left || null;
    this.right = right || null;
  }
}

class BinaryTree {
  #queue;

  constructor(arr = []) {
    this.#queue = [...arr];
    // this.root = this.#buildTreeWithLevelOrder(this.#queue);
    this.root = this.#buildTreeWithPreOrder(this.#queue);
  }

  #buildTreeWithLevelOrder(dataQueue) {
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

      if (this.#isValid(leftData)) {
        node.left = new TreeNode(leftData);
        nodeQueue.push(node.left);
      }

      if (this.#isValid(rightData)) {
        node.right = new TreeNode(rightData);
        nodeQueue.push(node.right);
      }
    }

    return root;
  }

  #buildTreeWithPreOrder(dataQueue) {
    if (!dataQueue || dataQueue.length === 0) {
      return null;
    }

    const data = dataQueue.shift();

    if (!this.#isValid(data)) {
      return null;
    }

    const node = new TreeNode(data);
    node.left = this.#buildTreeWithPreOrder(dataQueue);
    node.right = this.#buildTreeWithPreOrder(dataQueue);
    return node;
  }

  #isValid(value) {
    const inValidValues = [-1, null, undefined];
    return inValidValues.every((inValidVal) => value !== inValidVal);
  }

  #preOrderTraversal(node, ans) {
    if (!node) {
      return;
    }
    ans.push(node.data);
    this.#preOrderTraversal(node.left, ans);
    this.#preOrderTraversal(node.right, ans);
  }

  preOrder() {
    const ans = [];
    this.#preOrderTraversal(this.root, ans);
    console.log(ans);
    return ans;
  }

  #inorderTraversal(node, ans) {
    if (!node) {
      return;
    }

    this.#inorderTraversal(node.left, ans);
    ans.push(node.data);
    this.#inorderTraversal(node.right, ans);
  }

  inorder() {
    const ans = [];
    this.#inorderTraversal(this.root, ans);
    console.log(ans);
    return ans;
  }

  #postOrderTraversal(node, ans) {
    if (!node) {
      return;
    }
    this.#postOrderTraversal(node.left, ans);
    this.#postOrderTraversal(node.right, ans);
    ans.push(node.data);
  }

  postOrder() {
    const ans = [];
    this.#postOrderTraversal(this.root, ans);
    console.log(ans);
    return ans;
  }

  inOrderMorrisTraversal() {
    const ans = [];
    let node = this.root;

    while (node) {
      if (!node.left) {
        ans.push(node.data);
        node = node.right;
      } else {
        let currNode = node.left;
        while (currNode.right && currNode.right !== node) {
          currNode = currNode.right;
        }
        if (currNode.right === null) {
          currNode.right = node;
          node = node.left;
        } else {
          ans.push(node.data);
          currNode.right = null;
          node = node.right;
        }
      }
    }

    console.log(ans);
    return ans;
  }
}

const init = function () {
  // const arr = [1, 2, 3, 4, 5, 6, 7, -1, -1, 8, 9, -1, -1, -1, 10];
  const arr = [1, 2, 3, 4, -1, -1, 5, -1, -1, 6, -1, -1, 10, 11, -1, -1, -1];
  const binaryTree = new BinaryTree(arr);
  binaryTree.inorder();
  binaryTree.inOrderMorrisTraversal();
};

init();
