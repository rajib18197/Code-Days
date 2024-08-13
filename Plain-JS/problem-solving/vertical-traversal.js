class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left || null;
    this.right = right || null;
  }
}

class BinaryTree {
  queue = [];
  root = null;

  constructor(data) {
    this.initialValues = data;
    this.root = this.createTree();
  }

  createTree() {
    const root = new Node(this.initialValues[0]);
    this.initialValues.shift();
    this.queue.push(root);

    while (this.queue.length) {
      const temp = this.queue.shift();

      const leftValue = this.initialValues[0];
      this.initialValues.shift();

      if (leftValue && leftValue !== -1) {
        temp.left = new Node(leftValue);
        this.queue.push(temp.left);
      }

      const rightValue = this.initialValues[0];
      this.initialValues.shift();

      if (rightValue && rightValue !== -1) {
        temp.right = new Node(rightValue);
        this.queue.push(temp.right);
      }
    }

    return root;
  }

  render() {
    this.preOrderTraversal(this.root);
  }

  preOrderTraversal(root) {
    if (!root) return;

    console.log(root.data);
    if (root.left) {
      console.log(`left child of ${root.data}: `);
    }

    this.preOrderTraversal(root.left);

    if (root.right) {
      console.log(`right child of ${root.data}: `);
    }
    this.preOrderTraversal(root.right);
  }
}

const data = [
  1, 2, 3, 4, 5, -1, 6, 7, 8, -1, -1, 9, 10, -1, -1, 11, 12, -1, -1, 13, -1,
];

const binaryTree = new BinaryTree(data);
binaryTree.render();

const findLeftAndRightDepth = function (root, pos, depth) {
  if (!root) return;

  depth.left = Math.min(pos, depth.left);
  depth.right = Math.max(pos, depth.right);

  findLeftAndRightDepth(root.left, pos - 1, depth);
  findLeftAndRightDepth(root.right, pos + 1, depth);
};

const verticalTraversal = (root) => {
  const depth = { left: 0, right: 0 };
  findLeftAndRightDepth(root, 0, depth);
  const negativePos = [];
  const positivePos = [];

  bfsTraversal(root, 0, negativePos, positivePos);
  console.log(negativePos);
  console.log(positivePos);
};

const bfsTraversal = function (root, pos, negativePos, positivePos) {
  let queue = [];
  let index = [];
  const temp = root;
  queue.push(temp);
  index.push(pos);

  while (queue.length) {
    const temp = queue.shift();
    const curPos = index.shift();

    if (curPos <= 0) {
      if (negativePos[Math.abs(curPos)]) {
        negativePos[Math.abs(curPos)].push(temp.data);
      } else {
        negativePos[Math.abs(curPos)] = [temp.data];
      }
    }

    if (curPos > 0) {
      if (positivePos[curPos]) {
        positivePos[curPos].push(temp.data);
      } else {
        positivePos[curPos] = [temp.data];
      }
    }

    if (temp.left) {
      queue.push(temp.left);
      index.push(curPos - 1);
    }
    if (temp.right) {
      queue.push(temp.right);
      index.push(curPos + 1);
    }
  }
};

verticalTraversal(binaryTree.root);
