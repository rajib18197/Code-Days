class Node {
  constructor(value, left, right) {
    this.value = value;
    this.left = left || null;
    this.right = right || null;
    this.height = 1;
  }
}

const getHeight = function (node) {
  if (!node) return 0;
  return node.height;
};

const leftRotation = function (root) {
  const rightChild = root.right;
  const leftOfRightChild = rightChild.left;
  root.right.left = root;
  rightChild.left.right = leftOfRightChild;

  root.height = 1 + Math.max(getHeight(root.left), getHeight(root.right));
  rightChild.height = 1 + Math.max(getHeight(root.left), getHeight(root.right));

  return rightChild;
};

const rightRotation = function (root) {
  const leftChild = root.left;
  const rightOfLeftChild = leftChild.right;

  leftChild.right = root;
  root.left = rightOfLeftChild; // leftChild.right.left

  root.height = 1 + Math.max(getHeight(root.left), getHeight(root.right));
  leftChild.height = 1 + Math.max(getHeight(root.left), getHeight(root.right));

  return leftChild;
};

const buildAVLTree = function (root, value) {
  if (!root) {
    return new Node(value);
  }

  if (root.value > value) {
    root.left = buildAVLTree(root.left, value);
  } else if (root.value < value) {
    root.right = buildAVLTree(root.right, value);
  }

  root.height = 1 + Math.max(getHeight(root.left), getHeight(root.right));

  const heightBalanced = getHeight(root.left) - getHeight(root.right);

  // left - left
  if (heightBalanced > 1 && root.left.value > value) {
    return rightRotation(root);
  }

  // left-right
  if (heightBalanced > 1 && root.left.value < value) {
    root.left = leftRotation(root.left);
    return rightRotation(root);
  }

  // right - right
  if (heightBalanced < -1 && root.right.value < value) {
    return leftRotation(root);
  }

  // right - left
  if (heightBalanced < -1 && root.right.value > value) {
    root.right = rightRotation(root.right);
    return leftRotation(root);
  }

  return root;
};
