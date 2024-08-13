class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left || null;
    this.right = right || null;
  }
}

class BinaryTree {
  queue = [];
  tree = null;

  constructor(data) {
    this.data = data;

    this.tree = this.createTree();
  }

  createTree() {
    let node = new Node(this.data[0]);
    this.data.shift();
    this.queue.push(node);

    while (this.queue.length) {
      const temp = this.queue.shift();
      //   console.log(temp, 11);

      const leftValue = this.data[0];
      this.data.shift();

      if (leftValue && leftValue !== -1) {
        temp.left = new Node(leftValue);
        this.queue.push(temp.left);
      }

      const rightValue = this.data[0];
      this.data.shift();

      if (rightValue && rightValue !== -1) {
        temp.right = new Node(rightValue);
        this.queue.push(temp.right);
      }
    }

    return node;
  }

  render() {
    this.preOrderTraversal(this.tree);
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
