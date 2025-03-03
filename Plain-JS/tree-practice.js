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

  preOrderMorrisTraversal() {
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
          ans.push(node.data);
          currNode.right = node;
          node = node.left;
        } else {
          currNode.right = null;
          node = node.right;
        }
      }
    }

    console.log(ans);
    return ans;
  }

  postOrderMorrisTraversal() {
    const ans = [];
    let node = this.root;

    while (node) {
      if (!node.right) {
        ans.push(node.data);
        node = node.left;
      } else {
        let currNode = node.right;
        while (currNode.left && currNode.left !== node) {
          currNode = currNode.left;
        }

        if (currNode.left === null) {
          ans.push(node.data);
          currNode.left = node;
          node = node.right;
        } else {
          currNode.left = null;
          node = node.left;
        }
      }
    }

    for (let i = 0; i < Math.floor(ans.length / 2); i++) {
      let temp = ans[i];
      ans[i] = ans[ans.length - 1 - i];
      ans[ans.length - 1 - i] = temp;
    }

    console.log(ans);
    return ans;
  }

  preOrderIterative() {
    const stack = [];
    stack.push(this.root);
    const ans = [];

    while (stack.length !== 0) {
      const first = stack.pop();
      ans.push(first.data);

      if (first.right) {
        stack.push(first.right);
      }

      if (first.left) {
        stack.push(first.left);
      }
    }

    console.log(ans);
    return ans;
  }

  inorderIterative() {
    const stack = [];
    const visited = [];
    stack.push(this.root);
    visited.push(0);
    const ans = [];

    while (stack.length !== 0) {
      const node = stack.pop();
      const count = visited.pop();

      if (count === 0) {
        if (node.right) {
          stack.push(node.right);
          visited.push(0);
        }

        stack.push(node);
        visited.push(1);

        if (node.left) {
          stack.push(node.left);
          visited.push(0);
        }
      } else {
        ans.push(node.data);
      }
    }

    console.log(ans);
    return ans;
  }

  buildTreeWithPreAndIn(inorder, preorder, inStart, inEnd, index) {
    if (inStart > inEnd) {
      return null;
    }

    const node = new TreeNode(preorder[index]);
    const nodeIndex = getIndex(inorder, node.data, inStart, inEnd);
    node.left = this.buildTreeWithPreAndIn(
      inorder,
      preorder,
      inStart,
      nodeIndex - 1,
      index + 1
    );
    node.right = this.buildTreeWithPreAndIn(
      inorder,
      preorder,
      nodeIndex + 1,
      inEnd,
      index + (nodeIndex - inStart) + 1
    );

    return node;
  }
}

const init = function () {
  // const arr = [1, 2, 3, 4, 5, 6, 7, -1, -1, 8, 9, -1, -1, -1, 10];
  const arr = [1, 2, 3, 4, -1, -1, 5, -1, -1, 6, -1, -1, 10, 11, -1, -1, -1];
  const binaryTree = new BinaryTree(arr);
  binaryTree.inorder();
  binaryTree.preOrder();
  binaryTree.postOrder();
};

// init();

// class MaxHeap {
//   constructor(totalLength) {
//     this.arr = Array.from({ length: totalLength }, () => -1);
//     this.totalLength = totalLength;
//     this.curIndex = 0;
//   }

//   insert(value) {
//     if (this.curIndex === this.totalLength) {
//       return;
//     }

//     this.arr[this.curIndex] = value;
//     let index = this.curIndex;
//     this.curIndex++;

//     let parent = Math.floor((index - 1) / 2);
//     while (index > 0 && this.arr[index] > this.arr[parent]) {
//       let temp = this.arr[index];
//       this.arr[index] = this.arr[parent];
//       this.arr[parent] = temp;
//       index = parent;
//       parent = Math.floor((index - 1) / 2);
//     }
//   }

//   remove() {
//     if (this.curIndex === 0) {
//       return;
//     }

//     this.arr[0] = this.arr[this.curIndex - 1];
//     this.arr[this.curIndex - 1] = 0;
//     this.curIndex--;

//     if (this.curIndex === 0) {
//       return;
//     }

//     let index = 0;
//     let largest = index;
//     let left = index * 2 + 1;
//     let right = index * 2 + 2;

//     while (
//       index < this.curIndex &&
//       (this.arr[largest] < this.arr[left] ||
//         this.arr[largest] < this.arr[right])
//     ) {
//       if (this.arr[largest] < this.arr[left]) {
//         largest = left;
//       }

//       if (this.arr[largest] < this.arr[right]) {
//         largest = right;
//       }

//       let temp = this.arr[index];
//       this.arr[index] = this.arr[largest];
//       this.arr[largest] = temp;

//       index = largest;
//       left = index * 2 + 1;
//       right = index * 2 + 2;
//     }
//   }
// }

// const maxHeap = new MaxHeap(5);
// maxHeap.insert(1);
// maxHeap.insert(11);
// maxHeap.insert(102);
// maxHeap.insert(54);
// maxHeap.insert(16);
// maxHeap.remove();
// maxHeap.remove();
// console.log(maxHeap.arr);

class MaxHeap {
  constructor(arr) {
    this.arr = arr;
    this.buildHeap();
  }

  correctPlace(index, length) {
    let largest = index;
    let left = index * 2 + 1;
    let right = index * 2 + 2;

    while (
      index < length &&
      ((left < length && this.arr[largest] < this.arr[left]) ||
        (right < length && this.arr[largest] < this.arr[right]))
    ) {
      if (left < length && this.arr[largest] < this.arr[left]) {
        largest = left;
      }

      if (right < length && this.arr[largest] < this.arr[right]) {
        largest = right;
      }

      let temp = this.arr[index];
      this.arr[index] = this.arr[largest];
      this.arr[largest] = temp;

      index = largest;
      left = index * 2 + 1;
      right = index * 2 + 2;
    }
  }

  buildHeap() {
    for (let i = Math.floor(this.arr.length / 2) - 1; i >= 0; i--) {
      this.correctPlace(i, this.arr.length);
    }
  }

  sort() {
    for (let i = this.arr.length - 1; i >= 0; i--) {
      let temp = this.arr[0];
      this.arr[0] = this.arr[i];
      this.arr[i] = temp;
      this.correctPlace(0, i);
    }
  }
}

// const arr = [1, 100, 23, 26, 87];
// const maxHeap = new MaxHeap(arr);
// maxHeap.sort();
// console.log(maxHeap.arr);

class DisjoinSet {
  constructor(totalLength) {
    this.parent = Array.from({ length: totalLength }, (_, i) => i);
    this.rank = Array.from({ length: totalLength }, () => 1);
    this.size = Array.from({ length: totalLength }, () => 1);
  }

  findUltimateParent(vertex) {
    if (this.parent[vertex] === vertex) {
      return vertex;
    }

    return (this.parent[vertex] = this.findUltimateParent(this.parent[vertex]));
  }

  unionByRank(u, v) {
    const ult_parent_u = this.findUltimateParent(u);
    const ult_parent_v = this.findUltimateParent(v);

    if (ult_parent_u === ult_parent_v) {
      return;
    }

    if (this.rank[ult_parent_u] === this.rank[ult_parent_v]) {
      this.parent[ult_parent_u] = ult_parent_v;
      this.rank[ult_parent_v]++;
    } else if (this.rank[ult_parent_u] < this.rank[ult_parent_v]) {
      this.parent[ult_parent_u] = ult_parent_v;
    } else {
      // this.rank(ult_parent_u > this.rank[ult_parent_v])
      this.parent[ult_parent_v] = ult_parent_u;
    }
  }

  unionBySize(u, v) {
    const ult_parent_u = this.findUltimateParent(u);
    const ult_parent_v = this.findUltimateParent(v);

    if (ult_parent_u === ult_parent_v) {
      return;
    }

    if (this.size[ult_parent_u] === this.size[ult_parent_v]) {
      this.parent[ult_parent_u] = ult_parent_v;
      this.size[ult_parent_v]++;
    } else if (this.size[ult_parent_u] < this.size[ult_parent_v]) {
      this.parent[ult_parent_u] = ult_parent_v;
      this.size[ult_parent_v]++;
    } else {
      // this.size[ult_parent_u] > this.size[ult_parent_v]
      this.parent[ult_parent_v] = ult_parent_u;
      this.size[ult_parent_u]++;
    }
  }
}

const isValid = function (row, col, grid) {
  return row >= 0 && row < grid.length && col >= 0 && col < grid[0].length;
};

const makeIslandLarge = function (grid) {
  const ds = new DisjoinSet(grid.length * grid[0].length);

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === 0) {
        continue;
      }

      const dr = [-1, 0, 1, 0];
      const dc = [0, 1, 0, -1];

      for (let i = 0; i < 4; i++) {
        if (isValid(dr[i] + row, dc[i] + col, grid)) {
          const rowNode = row * grid[0].length + col;
          const neighbourNode = (row + dr[i]) * grid[0].length + (col + dc[i]);
          if (grid[row + dr[i]][col + dc[i]] === 1) {
            if (
              ds.findUltimateParent(rowNode) !==
              ds.findUltimateParent(neighbourNode)
            ) {
              ds.unionBySize(rowNode, neighbourNode);
            }
          }
        }
      }
    }
  }
  // for (let i = 0; i < ds.parent.length; i++) {
  //   console.log(`${i} -> ${ds.parent[i]}`);
  // }

  let maxSize = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === 1) {
        continue;
      }

      const dr = [-1, 0, 1, 0];
      const dc = [0, 1, 0, -1];
      const set = new Set();

      for (let i = 0; i < 4; i++) {
        if (
          isValid(dr[i] + row, dc[i] + col, grid) &&
          grid[row + dr[i]][col + dc[i]] === 1
        ) {
          const adjNode = (row + dr[i]) * grid[0].length + (col + dc[i]);
          const ult_parent_adjNode = ds.findUltimateParent(adjNode);
          set.add(ult_parent_adjNode);
        }
      }
      let totalSize = 1;
      for (let vertex of set) {
        const size = ds.size[vertex];
        totalSize += size;
      }

      if (maxSize < totalSize) {
        maxSize = totalSize;
      }
    }
  }
  console.log(maxSize);
  return maxSize;
};

const grid = [
  [1, 1, 0, 1, 1, 0],
  [1, 1, 0, 1, 1, 0],
  [1, 1, 0, 1, 1, 0],
  [0, 0, 1, 0, 0, 0],
  [0, 0, 1, 1, 1, 0],
  [0, 0, 1, 1, 1, 0],
];

// makeIslandLarge(grid);

const accountsMerge = function (accounts) {
  const ds = new DisjoinSet(accounts.length);
  const map = new Map();

  for (let row = 0; row < accounts.length; row++) {
    for (let col = 1; col < accounts[row].length; col++) {
      if (map.has(accounts[row][col])) {
        ds.unionBySize(row, map.get(accounts[row][col]));
      } else {
        map.set(accounts[row][col], row);
      }
    }
  }
  // console.log(ds.parent);
  // console.log(map);

  const arr = Array.from({ length: accounts.length }, () => []);

  for (let [mail, node] of map) {
    const ult_parent = ds.findUltimateParent(node);
    arr[ult_parent].push(mail);
  }

  const ans = [];
  for (let i = 0; i < arr.length; i++) {
    const mails = [];
    mails.push(accounts[i][0]);
    for (let j = 0; j < arr[i].length; j++) {
      mails.push(arr[i][j]);
    }
    if (mails.length === 1) {
      ans.push([]);
    } else {
      ans.push(mails);
    }
  }
  console.log(ans);
};

// accountsMerge([
//   ["John", "j1@com", "j2@com", "j3@com"],
//   ["John", "j4@com"],
//   ["Raj", "r1@com", "r2@com"],
//   ["John", "j1@com", "j5@com"],
//   ["Raj", "r2@com", "r3@com"],
//   ["Mary", "m1@com"],
// ]);

const editDistance = function (i, j, str1, str2, cache) {
  if (i === 0) {
    return j;
  }

  if (j === 0) {
    return i;
  }

  if (cache[i][j] !== -1) {
    return cache[i][j];
  }

  if (str1[i - 1] === str2[j - 1]) {
    return (cache[i][j] = editDistance(i - 1, j - 1, str1, str2, cache));
  }

  return (cache[i][j] = Math.min(
    1 + editDistance(i, j - 1, str1, str2, cache),
    Math.min(
      1 + editDistance(i - 1, j, str1, str2, cache),
      1 + editDistance(i - 1, j - 1, str1, str2, cache)
    )
  ));
};

const calcEditDistance = function (str1, str2) {
  const cache = Array.from({ length: str1.length + 1 }, () =>
    Array.from({ length: str2.length + 1 }, () => -1)
  );
  const minOperations = editDistance(
    str1.length,
    str2.length,
    str1,
    str2,
    cache
  );
  console.log(minOperations);
  console.log(cache);
};

calcEditDistance("intention", "execution");
