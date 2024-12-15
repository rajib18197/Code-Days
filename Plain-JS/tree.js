// // class TrieNode {
// //   constructor(charValue = "") {
// //     this.charValue = charValue;
// //     this.childrens = Array.from({ length: 26 }, () => null);
// //     this.wordEnd = false;
// //   }
// // }

// // const insertWord = function (root, word) {
// //   if (word.length === 0) {
// //     root.wordEnd = true;
// //     return;
// //   }

// //   const index = word[0].charCodeAt() - "a".charCodeAt();

// //   if (root.childrens[index] === null) {
// //     root.childrens[index] = new TrieNode(word[0]);
// //     insertWord(root.childrens[index], word.slice(1));
// //   } else {
// //     insertWord(root.childrens[index], word.slice(1));
// //   }
// // };

// // const searchWord = function (node, ans) {
// //   if (!node) {
// //     return;
// //   }

// //   let childNode = null;
// //   // Checking If this node has only 1 children or Not. If yes then proceed, otherwise return from here
// //   for (let i = 0; i < 26; i++) {
// //     if (node.childrens[i] !== null) {
// //       if (childNode) return;

// //       childNode = node.childrens[i];
// //     }
// //   }

// //   // If only 1 children has found and that children have a wordEnd = true then also return
// //   if (!childNode || childNode.wordEnd) {
// //     ans.push(childNode.charValue);
// //     return;
// //   }

// //   ans.push(childNode.charValue);
// //   searchWord(childNode, ans);
// // };

// // var longestCommonPrefix = function (strs) {
// //   const root = new TrieNode();

// //   for (let i = 0; i < strs.length; i++) {
// //     if (!strs[i]) continue;
// //     insertWord(root, strs[i]);
// //   }

// //   const ans = [];
// //   searchWord(root, ans);
// //   console.log(ans);
// //   return ans.join("");
// // };

// // longestCommonPrefix(["flower", "flow", "flight"]);

// // class Node {
// //   constructor(value, left = null, right = null, color = "red") {
// //     this.value = value;
// //     this.left = left;
// //     this.right = right;
// //     this.color = color;
// //   }
// // }

// // const leftRotate = function (node) {
// //   const child = node.right;
// //   const childLeft = child.left;
// //   node.right.left = node;
// //   node.right = childLeft;
// //   return child;
// // };

// // const rightRotate = function (node) {
// //   const child = node.left;
// //   const childRight = child.right;
// //   child.right = node;
// //   node.left = childRight;
// //   return child;
// // };

// // const buildBalancedTree = function (node, value, parent) {
// //   if (!node) {
// //     return new Node(value);
// //   }

// //   if (node.value > value) {
// //     node.left = buildBalancedTree(node.left, value, node);
// //     if (node.color === "black") {
// //       return node;
// //     }

// //     if (
// //       node.color === "red" &&
// //       (node.left.color === "red" || parent.color === "red")
// //     ) {
// //       if (parent.right === node) {
// //         if (parent.left && parent.left.color === "red") {
// //           parent.left.color = "black";
// //           node.color = "black";
// //           parent.color = "red";
// //         } else {
// //           // rotation
// //           if (parent.right.value < value) {
// //             // rr (left rotation)
// //             const node = leftRotate(parent);
// //             node.left.color = "black";
// //             node.right.color = "black";
// //             node.color = "red";
// //             return node;
// //           } else if (parent.right.value > value) {
// //             // rl (right then left)
// //             parent.right = rightRotate(parent.right);
// //             const node = leftRotate(parent);
// //             node.left.color = "black";
// //             node.right.color = "black";
// //             node.color = "red";
// //             return node;
// //           }
// //         }
// //       } else {
// //         if (parent.right && parent.right.color === "red") {
// //           parent.right.color = "black";
// //           node.color = "black";
// //           parent.color = "red";
// //         } else {
// //           // rotation
// //           if (parent.left.value > value) {
// //             // ll (right rotation)
// //             const node = rightRotate(parent);
// //             node.left.color = "black";
// //             node.right.color = "black";
// //             node.color = "red";
// //             return node;
// //           } else if (parent.right.value < value) {
// //             // lr (left then right)
// //             parent.left = leftRotate(parent.left);
// //             const node = rightRotate(parent);
// //             node.left.color = "black";
// //             node.right.color = "black";
// //             node.color = "red";
// //             return node;
// //           }
// //         }
// //       }
// //     } else {
// //       return node;
// //     }
// //   } else {
// //     node.right = buildBalancedTree(node.right, value, node);

// //     if (node.color === "black") {
// //       return node;
// //     }
// //     if (!parent) return node;
// //     if (
// //       node.color === "red" &&
// //       (node.right.color === "red" || parent.color === "red")
// //     ) {
// //       if (parent.right === node) {
// //         console.log(parent.value, 11);
// //         if (parent.left && parent.left.color === "red") {
// //           parent.left.color = "black";
// //           node.color = "black";
// //           parent.color = "red";
// //         } else {
// //           // rotation
// //           if (parent.right.value < value) {
// //             // rr (left rotation)
// //             const node = leftRotate(parent);
// //             node.left.color = "black";
// //             node.right.color = "black";
// //             node.color = "red";
// //             return node;
// //           } else if (parent.right.value > value) {
// //             // rl (right then left)
// //             parent.right = rightRotate(parent.right);
// //             const node = leftRotate(parent);
// //             node.left.color = "black";
// //             node.right.color = "black";
// //             node.color = "red";
// //             return node;
// //           }
// //         }
// //       } else {
// //         if (parent.right && parent.right.color === "red") {
// //           parent.right.color = "black";
// //           node.color = "black";
// //           parent.color = "red";
// //         } else {
// //           // rotation
// //           if (parent.left.value > value) {
// //             // ll (right rotation)
// //             const node = rightRotate(parent);
// //             node.left.color = "black";
// //             node.right.color = "black";
// //             node.color = "red";
// //             return node;
// //           } else if (parent.right.value < value) {
// //             // lr (left then right)
// //             parent.left = leftRotate(parent.left);
// //             const node = rightRotate(parent);
// //             node.left.color = "black";
// //             node.right.color = "black";
// //             node.color = "red";
// //             return node;
// //           }
// //         }
// //       }
// //     } else {
// //       return node;
// //     }
// //   }
// // };

// // const buildTree = function (arr) {
// //   let root = null;

// //   for (let i = 0; i < arr.length; i++) {
// //     root = buildBalancedTree(root, arr[i], null);
// //     if (root.color === "red") {
// //       root.color = "black";
// //     }
// //   }
// //   console.log(root);
// // };

// // buildTree([10, 20, 30]);

// class Node {
//   constructor(value, left = null, right = null, color = "red") {
//     this.value = value;
//     this.left = left;
//     this.right = right;
//     this.color = color; // Red by default
//   }
// }

// class RedBlackTree {
//   constructor() {
//     this.root = null;
//   }

//   rotateLeft(node) {
//     const child = node.right;
//     node.right = child.left;
//     child.left = node;
//     child.color = node.color;
//     node.color = "red";
//     return child;
//   }

//   rotateRight(node) {
//     const child = node.left;
//     node.left = child.right;
//     child.right = node;
//     child.color = node.color;
//     node.color = "red";
//     return child;
//   }

//   flipColors(node) {
//     node.color = "red";
//     node.left.color = "black";
//     node.right.color = "black";
//   }

//   insert(node, value) {
//     if (!node) return new Node(value);

//     if (value < node.value) {
//       node.left = this.insert(node.left, value);
//     } else if (value > node.value) {
//       node.right = this.insert(node.right, value);
//     }

//     // Fix violations
//     if (this.isRed(node.right) && !this.isRed(node.left)) {
//       node = this.rotateLeft(node);
//     }
//     if (this.isRed(node.left) && this.isRed(node.left.left)) {
//       node = this.rotateRight(node);
//     }
//     if (this.isRed(node.left) && this.isRed(node.right)) {
//       this.flipColors(node);
//     }

//     return node;
//   }

//   isRed(node) {
//     if (!node) return false;
//     return node.color === "red";
//   }

//   add(value) {
//     this.root = this.insert(this.root, value);
//     this.root.color = "black";
//   }

//   printTree(node, level = 0) {
//     if (!node) return;
//     this.printTree(node.right, level + 1);
//     console.log(" ".repeat(4 * level) + `${node.value} (${node.color})`);
//     this.printTree(node.left, level + 1);
//   }
// }

// // Example usage:
// const rbt = new RedBlackTree();
// [10, 20, 30].forEach((value) => rbt.add(value));
// // rbt.printTree(rbt.root);
// console.log(rbt.root);

// const places = [
//   "Bangladesh",
//   "Tanzania",
//   "Portugal",
//   "Finland",
//   "Turkey",
//   "Canada",
// ];

// const edges = [
//   [
//     [1, 6],
//     [2, 2],
//   ],

//   [
//     [2, 3],
//     [3, 7],
//   ],

//   [[4, 4]],

//   [
//     [4, 5],
//     [5, 2],
//   ],

//   [[5, 9]],
// ];

// const buildGraph = function (vertexLength, edges) {
//   const graph = Array.from({ length: vertexLength }, () => []);

//   for (let i = 0; i < edges.length; i++) {
//     for (let j = 0; j < edges[i].length; j++) {
//       const [vertex, weight] = [edges[i][j][0], edges[i][j][1]];
//       graph[i].push([vertex, weight]);
//       graph[vertex].push([i, weight]);
//     }
//   }

//   // console.log(graph);
//   return graph;
// };

// const graph = buildGraph(places.length, edges);

// const findShortestPath = function (source, graph, vertexLength) {
//   const explored = [];
//   const distance = Array.from({ length: vertexLength }, () => Number.MAX_VALUE);
//   distance[source] = 0;

//   let count = vertexLength;
//   while (count--) {
//     let vertex = -1;
//     let minValue = Number.MAX_VALUE;

//     for (let i = 0; i < distance.length; i++) {
//       if (!explored[i] && minValue > distance[i]) {
//         minValue = distance[i];
//         vertex = i;
//       }
//     }

//     explored[vertex] = 1;

//     for (let i = 0; i < graph[vertex].length; i++) {
//       const [neighbour, weight] = [graph[vertex][i][0], graph[vertex][i][1]];

//       if (
//         !explored[neighbour] &&
//         distance[neighbour] > distance[vertex] + weight
//       ) {
//         distance[neighbour] = distance[vertex] + weight;
//       }
//     }
//   }

//   // console.log(distance);
//   return distance;
// };

// const distance = findShortestPath(0, graph, places.length);
// const calcBFS = function (row, col, grid) {
//   const totalCols = grid.length;
//   const totalRows = grid[0].length;
//   const queue = [[row, col]];
//   grid[row][col] = 0;
//   const ans = [[row, col]];
//   while (queue.length) {
//     const [row, col] = queue.shift();
//     const left = col - 1;
//     const right = col + 1;
//     const up = row - 1;
//     const bottom = row + 1;

//     if (left >= 0 && left < totalRows && grid[row][left] === 1) {
//       queue.push([row, left]);
//       grid[row][left] = 0;
//       ans.push([row, left]);
//     }
//     if (right >= 0 && right < totalRows && grid[row][right] === 1) {
//       queue.push([row, right]);
//       grid[row][right] = 0;
//       ans.push([row, right]);
//     }
//     if (up >= 0 && up < totalCols && grid[up][col] === 1) {
//       queue.push([up, col]);
//       grid[up][col] = 0;
//       ans.push([up, col]);
//     }
//     if (bottom >= 0 && bottom < totalCols && grid[bottom][col] === 1) {
//       queue.push([bottom, col]);
//       grid[bottom][col] = 0;
//       ans.push([bottom, col]);
//     }
//   }
//   return ans.length;
// };

// var numIslands = function (grid) {
//   let max = 0;
//   for (let i = 0; i < grid.length; i++) {
//     for (let j = 0; j < grid[i].length; j++) {
//       if (grid[i][j] === 1) {
//         max = Math.max(max, calcBFS(i, j, grid));
//       }
//     }
//   }
//   console.log(max, 11);
//   console.log(grid);

//   return max;
// };

// numIslands([
//   [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
//   [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
//   [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
// ]);

// 537 - 4538;

const cyclicSort = function (arr) {
  let absent = -1;

  for (let i = 0; i < arr.length; i++) {
    while (i !== arr[i]) {
      // whenever we find an "array index out of bound", we are going to skip it and break out of this loop. However, before breaking, we will store this index in the absent variable. What if this is the number we are looking for - 'the only absent number in the array'.
      if (arr[i] >= arr.length) {
        absent = i;
        break;
      }

      let temp = arr[arr[i]];
      arr[arr[i]] = arr[i];
      arr[i] = temp;
    }
  }
  console.log(arr);

  if (absent === -1 && arr[arr.length - 1] !== arr.length) {
    absent = arr.length;
  }

  console.log(absent);

  return absent;
};

const absents = function (arr) {
  let ans = [];

  for (let i = 0; i < arr.length; i++) {
    while (i !== arr[i] - 1) {
      if (arr[i] - 1 >= arr.length || arr[i] === arr[arr[i] - 1]) {
        break;
      }

      let temp = arr[arr[i] - 1];
      arr[arr[i] - 1] = arr[i];
      arr[i] = temp;
    }
  }

  console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i + 1) {
      ans.push(i + 1);
    }
  }

  console.log(ans);

  return ans;
};

// absents([4, 3, 2, 7, 8, 2, 3, 1]);
var setZeroes = function (matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === "b") {
        matrix[i][j] = 0;
      } else if (matrix[i][j] === 0) {
        let m = j + 1;
        let n = i + 1;
        let o = j - 1;
        let p = i - 1;

        while (m >= 0 && m < matrix[0].length && matrix[i][m] !== 0) {
          matrix[i][m] = "b";
          m++;
        }

        while (n >= 0 && n < matrix.length && matrix[n][j] !== 0) {
          matrix[n][j] = "b";
          n++;
        }

        while (o >= 0 && o < matrix[0].length) {
          matrix[i][o] = 0;
          o--;
        }

        while (p >= 0 && p < matrix.length) {
          matrix[p][j] = 0;
          p--;
        }
      }
    }
  }
  console.log(matrix);

  return matrix;
};

setZeroes([
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
]);
