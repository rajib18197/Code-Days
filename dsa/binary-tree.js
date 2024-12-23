class TreeNode {
  constructor(value, left, right) {
    this.value = value;
    this.left = left || null;
    this.right = right || null;
  }
}

class BinaryTree {
  constructor(queue) {
    this.root = null;
    this.queue = queue;
  }

  createBinaryTreeWithBFS(queue) {
    const value = queue[0];
    this.root = new TreeNode(value);
    const internalQueue = [this.root];
    queue.shift();

    while (queue.length !== 0) {
      const temp = internalQueue.shift();
      const leftValue = queue.shift();
      const rightValue = queue.shift();

      if (leftValue !== null) {
        temp.left = new TreeNode(leftValue);
        internalQueue.push(temp.left);
      }

      if (rightValue !== null) {
        temp.right = new TreeNode(rightValue);
        internalQueue.push(temp.right);
      }
    }

    return this.root;
  }

  build() {
    this.createBinaryTreeWithBFS(this.queue);
  }
}

const createBinaryTreeWithBFS = function (queue) {
  const value = queue[0];
  const root = new TreeNode(value);
  const internalQueue = [root];
  queue.shift();

  while (queue.length !== 0) {
    const temp = internalQueue.shift();
    const leftValue = queue.shift();
    const rightValue = queue.shift();

    if (leftValue !== null) {
      temp.left = new TreeNode(leftValue);
      internalQueue.push(temp.left);
    }

    if (rightValue !== null) {
      temp.right = new TreeNode(rightValue);
      internalQueue.push(temp.right);
    }
  }

  return root;
};

// A queue is given, and we traversed by breadth wise, to build a tree DS (iterative way).
const queue = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1];
const binaryTree = new BinaryTree(queue);
binaryTree.build();
console.log(binaryTree.root);
console.log(queue);
