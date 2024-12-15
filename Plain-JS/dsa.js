// // // class Node {
// // //   constructor(value, left, right) {
// // //     this.value = value;
// // //     this.left = left || null;
// // //     this.right = right || null;
// // //     // this.next = null;
// // //   }
// // // }

// // // // // // // const queue = [
// // // // // // //   1, 2, 3, 4, 5, 6, 7, -1, -1, 8, 9, -1, 10, -1, -1, -1, -1, -1, -1, -1, -1,
// // // // // // // ];

// // // // // const queue = [
// // // // //   1, 2, 3, 4, 5, 6, 7, 8, 10, -1, 9, -1, -1, 16, 19, -1, -1, 20, -1, -1, -1, -1,
// // // // //   -1, -1, -1, 22, 23, 24, -1, -1, -1,
// // // // // ];

// // // // // // const queue = [1, 2, 3];
// // // // // // console.log(Array.from({ length: 26 }, () => 1));

// // // // // // // A queue is given, and we traversed by breadth wise, to build a tree DS (iterative way).
// // // const createBinaryTreeWithBFS = function (queue) {
// // //   const value = queue[0];
// // //   const root = new Node(value);
// // //   const internalQueue = [root];
// // //   queue.shift();

// // //   while (queue.length !== 0) {
// // //     const temp = internalQueue.shift();
// // //     const leftValue = queue.shift();
// // //     const rightValue = queue.shift();

// // //     if (leftValue !== -1 && leftValue !== null) {
// // //       console.log(leftValue);
// // //       temp.left = new Node(leftValue);
// // //       internalQueue.push(temp.left);
// // //     }

// // //     if (rightValue !== -1 && rightValue !== null) {
// // //       console.log(rightValue, 222);

// // //       temp.right = new Node(rightValue);
// // //       internalQueue.push(temp.right);
// // //     }
// // //   }

// // //   return root;
// // // };

// // // // const queue = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1];
// // // // const tree = createBinaryTreeWithBFS(queue);
// // // // console.log(tree);
// // // // // // // console.log(queue);

// // // // // // // A queue is given, and we traversed by depth wise, to build a tree DS. (recursive way).
// // // // // const createBinaryTreeWithDFS = function (queue, index) {
// // // // //   if (queue[index] === -1) {
// // // // //     return null;
// // // // //   }

// // // // //   if (index >= queue.length) {
// // // // //     return null;
// // // // //   }

// // // // //   const node = new Node(queue[index]);
// // // // //   node.left = createBinaryTreeWithDFS(queue, index * 2 + 1);
// // // // //   node.right = createBinaryTreeWithDFS(queue, index * 2 + 2);
// // // // //   return node;
// // // // // };

// // // // // const tree = createBinaryTreeWithDFS(
// // // // //   [1, 4, 3, 2, 4, 2, 5, -1, -1, -1, -1, -1, -1, 4, 6, -1, -1, -1, -1],
// // // // //   0
// // // // // );
// // // // // console.log(tree);

// // // // // // var kthLargestLevelSum = function (root, k) {
// // // // // //   const queue = [root];
// // // // // //   let arr = [];
// // // // // //   let level = 0;
// // // // // //   while (queue.length !== 0) {
// // // // // //     let lengthOfLevel = queue.length;
// // // // // //     let sum = 0;
// // // // // //     for (let i = 0; i < lengthOfLevel; i++) {
// // // // // //       const firstNode = queue.shift();
// // // // // //       sum += firstNode.value;

// // // // // //       if (firstNode.left) {
// // // // // //         queue.push(firstNode.left);
// // // // // //       }

// // // // // //       if (firstNode.right) {
// // // // // //         queue.push(firstNode.right);
// // // // // //       }
// // // // // //     }
// // // // // //     arr.push(sum);
// // // // // //     level++;
// // // // // //   }

// // // // // //   if (k > level) return -1;
// // // // // //   arr = arr.sort((a, b) => b - a);
// // // // // //   console.log(arr);

// // // // // //   // if (k > level) return -1;

// // // // // //   // return obj[k - 1];
// // // // // // };

// // // // // // const sum = kthLargestLevelSum(tree, 2);

// // // // // // console.log(sum);

// // // // // // const queue1 = [1, 2, 3, 4, 5, 6, 7, -1, -1, -1, -1, -1, -1, -1, -1];
// // // // // // const perfectTree = createBinaryTreeWithDFS(queue1, 0);
// // // // // // console.log(perfectTree);

// // // // // // const getLevelCount = function (level) {
// // // // // //   let count = 1;

// // // // // //   for (let i = 0; i < level; i++) {
// // // // // //     count = count * 2;
// // // // // //   }

// // // // // //   return count;
// // // // // // };

// // // // // // const generateNextRightPointer = function (perfectTree) {
// // // // // //   let left = perfectTree;

// // // // // //   while (left.left) {
// // // // // //     let curr = left;
// // // // // //     while (curr) {
// // // // // //       curr.left.next = curr.right;
// // // // // //       if (curr.next) {
// // // // // //         curr.right.next = curr.next.left;
// // // // // //       }
// // // // // //       curr = curr.next;
// // // // // //     }

// // // // // //     left = left.left;
// // // // // //   }
// // // // // // };

// // // // // // // generateNextRightPointer(perfectTree);
// // // // // // // console.log(perfectTree);

// // // // // // const traverse = function (root) {
// // // // // //   let startLevel = root;
// // // // // //   while (startLevel) {
// // // // // //     let temp = startLevel;
// // // // // //     const levelAns = [];
// // // // // //     while (temp) {
// // // // // //       levelAns.push(temp.value);
// // // // // //       temp = temp.next;
// // // // // //     }
// // // // // //     console.log(levelAns);
// // // // // //     startLevel = startLevel.left;
// // // // // //   }
// // // // // // };

// // // // // // const traverse2 = function (root) {
// // // // // //   if (!root) return;

// // // // // //   traverse2(root.left);
// // // // // //   console.log(root.value);
// // // // // //   traverse2(root.right);
// // // // // // };

// // // // // // // traverse2(perfectTree);

// // // // // // // traverse(perfectTree);
// // // // // // const createHashMap = function (inorder) {
// // // // // //   const hashMap = {};

// // // // // //   for (let i = 0; i < inorder.length; i++) {
// // // // // //     hashMap[inorder[i]] = i;
// // // // // //   }

// // // // // //   return hashMap;
// // // // // // };

// // // // // // let indexGlobal = 0;

// // // // // // const constructTree = function (leftIndex, rightIndex) {
// // // // // //   // if(indexGlobal === )
// // // // // //   if (leftIndex > rightIndex) {
// // // // // //     return null;
// // // // // //   }
// // // // // //   const value = preorder[indexGlobal++];
// // // // // //   const index = hashMap[value];
// // // // // //   console.log(value);

// // // // // //   const node = new Node(value);

// // // // // //   node.left = constructTree(leftIndex, index - 1);
// // // // // //   node.right = constructTree(index + 1, rightIndex);
// // // // // //   return node;
// // // // // // };
// // // // // // // 0, 4
// // // // // // // const preorder = [3, 9, 20, 15, 7];
// // // // // // // const inorder = [9, 3, 15, 20, 7];
// // // // // // const preorder = [-1];
// // // // // // const inorder = [-1];
// // // // // // const hashMap = createHashMap(inorder);
// // // // // // const tree = constructTree(0, preorder.length - 1);
// // // // // // console.log(tree);

// // // // // const arr = [1, 2, 3, 2, 3, 3];

// // // // const friends = [
// // // //   "ozil",
// // // //   "ronaldo",
// // // //   "virat",
// // // //   "raju",
// // // //   "finn",
// // // //   "steve",
// // // //   "peter",
// // // //   "mark",
// // // //   "grylls",
// // // // ];

// // // // const vertex = 9;
// // // // const edges = [
// // // //   [0, 1],
// // // //   [0, 2],
// // // //   [0, 3],
// // // //   [1, 2],
// // // //   [1, 3],
// // // //   [2, 3],
// // // //   [2, 5],
// // // //   [3, 4],
// // // //   [3, 8],
// // // //   [4, 6],
// // // //   [5, 6],
// // // //   [6, 8],
// // // //   [7, 8],
// // // // ];

// // // // const createGraph = function (vertex, edges) {
// // // //   const adjList = Array.from({ length: vertex }, () => []);

// // // //   for (let i = 0; i < edges.length; i++) {
// // // //     adjList[edges[i][0]].push(edges[i][1]);
// // // //     adjList[edges[i][1]].push(edges[i][0]);
// // // //   }

// // // //   console.log(adjList);
// // // //   return adjList;
// // // // };

// // // // // const adjList = createGraph(vertex, edges);

// // // // const bfsOfGraph = function (adjList, vertex) {
// // // //   const queue = [0];
// // // //   const visited = [1];
// // // //   const ans = [];

// // // //   while (queue.length) {
// // // //     const first = queue.shift();
// // // //     ans.push(first);

// // // //     for (let i = 0; i < adjList[first].length; i++) {
// // // //       // if (friends[adjList[first][i]] === "mark") {
// // // //       //   console.log(adjList[first][i]);
// // // //       //   break;
// // // //       // }
// // // //       if (!visited[adjList[first][i]]) {
// // // //         queue.push(adjList[first][i]);
// // // //         visited[adjList[first][i]] = 1;
// // // //       }
// // // //     }
// // // //   }
// // // //   console.log(ans);
// // // // };

// // // // const dfsOfGraph = function (node, adjList, ans, visited) {
// // // //   ans.push(node);
// // // //   visited[node] = 1;

// // // //   for (let i = 0; i < adjList[node].length; i++) {
// // // //     if (!visited[adjList[node][i]]) {
// // // //       dfsOfGraph(adjList[node][i], adjList, ans, visited);
// // // //     }
// // // //   }
// // // // };

// // // // // bfsOfGraph(adjList, vertex);
// // // // const ans = [];
// // // // const visited = [];
// // // // // dfsOfGraph(0, adjList, ans, visited);
// // // // // console.log(ans);

// // // // // Start where you have the most information.
// // // // // When you're given multiple pieces of information, start with the one that lets you deduce the most.

// // // // const inorder = function (root) {
// // // //   const ans = [];
// // // //   let curr = root;
// // // //   while (curr) {
// // // //     if (!curr.left) {
// // // //       ans.push(curr.value);
// // // //       curr = curr.right;
// // // //     } else {
// // // //       let temp = curr.left;
// // // //       while (temp.right && temp.right !== curr) {
// // // //         temp = temp.right;
// // // //       }
// // // //       if (temp.right === null) {
// // // //         temp.right = curr;
// // // //         curr = curr.left;
// // // //       } else {
// // // //         ans.push(curr.value);
// // // //         temp.right = null;
// // // //         curr = curr.right;
// // // //       }
// // // //     }
// // // //   }

// // // //   console.log(ans);
// // // // };

// // // // const postorder = function (root) {
// // // //   const ans = [];
// // // //   let curr = root;
// // // //   while (curr) {
// // // //     if (!curr.right) {
// // // //       ans.push(curr.value);
// // // //       curr = curr.left;
// // // //     } else {
// // // //       let temp = curr.right;
// // // //       while (temp.left && temp.left !== curr) {
// // // //         temp = temp.left;
// // // //       }
// // // //       if (temp.left === null) {
// // // //         temp.left = curr;
// // // //         ans.push(curr.value);
// // // //         curr = curr.right;
// // // //       } else {
// // // //         temp.left = null;
// // // //         curr = curr.left;
// // // //       }
// // // //     }
// // // //   }

// // // //   let j = 0;
// // // //   for (let i = ans.length - 1; i >= Math.floor(ans.length / 2); i--) {
// // // //     let temp = ans[j];
// // // //     ans[j] = ans[i];
// // // //     ans[i] = temp;
// // // //     j++;
// // // //   }

// // // //   console.log(ans);
// // // // };

// // // // postorder(tree);
// // // // inorder(tree);

// // // // Remember, DEEP LEARNING is the No. 1 secret to English fluency. If you want to speak English fluently and automatically, you have to repeat the same lesson over and over again until you MASTER it.

// // // // Listening is THE KEY to better English speaking. The more REAL English conversations you listen to, the more fluent you will become, to be sure.

// // // // const isCousins = function (root, x, y) {
// // // //   if (!root) return false;

// // // //   const queue = [root];

// // // //   let first = null;
// // // //   let second = null;

// // // //   while (queue.length !== 0) {
// // // //     const levelLength = queue.length;

// // // //     for (let i = 0; i < levelLength; i++) {
// // // //       const node = queue.shift();
// // // //       if (node.left && node.left.value === x) {
// // // //         if (!first) {
// // // //           first = [node, node.left];
// // // //         } else {
// // // //           second = [node, node.left];
// // // //         }
// // // //       } else if (node.left && node.left.value === y) {
// // // //         if (!first) {
// // // //           first = [node, node.left];
// // // //         } else {
// // // //           second = [node, node.left];
// // // //         }
// // // //       }

// // // //       if (node.right && node.right.value === x) {
// // // //         if (!first) {
// // // //           first = [node, node.right];
// // // //         } else {
// // // //           second = [node, node.right];
// // // //         }
// // // //       } else if (node.right && node.right.value === y) {
// // // //         if (!first) {
// // // //           first = [node, node.right];
// // // //         } else {
// // // //           second = [node, node.right];
// // // //         }
// // // //       }

// // // //       if (node.left) {
// // // //         queue.push(node.left);
// // // //       }

// // // //       if (node.right) {
// // // //         queue.push(node.right);
// // // //       }
// // // //     }

// // // //     if (first && !second) {
// // // //       return false;
// // // //     }

// // // //     if (second && !first) {
// // // //       return false;
// // // //     }

// // // //     if (first && second) {
// // // //       if (first[0] !== second[0]) {
// // // //         return true;
// // // //       } else {
// // // //         return false;
// // // //       }
// // // //     }
// // // //   }

// // // //   return false;
// // // // };

// // // // const findNode = function (node, value) {
// // // //   if (!node) {
// // // //     return null;
// // // //   }

// // // //   if (node.value === value) {
// // // //     return node;
// // // //   }

// // // //   return findNode(node.left, value) || findNode(node.right, value);
// // // // };

// // // // const getLevel = function (node, target, level) {
// // // //   if (!node) {
// // // //     return -1;
// // // //   }

// // // //   if (node === target) {
// // // //     return level;
// // // //   }

// // // //   const left = getLevel(node.left, target, level + 1);

// // // //   if (left !== -1) {
// // // //     return left;
// // // //   }

// // // //   return getLevel(node.right, target, level + 1);
// // // // };

// // // // const isSiblings = function (node, x, y) {
// // // //   if (!node) {
// // // //     return false;
// // // //   }

// // // //   if (
// // // //     (node.left &&
// // // //       node.left.value === x &&
// // // //       node.right &&
// // // //       node.right.value === y) ||
// // // //     (node.left && node.left.value === y && node.right && node.right.value === x)
// // // //   ) {
// // // //     return true;
// // // //   }

// // // //   return isSiblings(node.left, x, y) || isSiblings(node.right, x, y);
// // // // };

// // // // const isCousinsRecursive = function (root, x, y) {
// // // //   const nodeX = findNode(root, x);
// // // //   const nodeY = findNode(root, y);

// // // //   return (
// // // //     getLevel(root, nodeX, 0) === getLevel(root, nodeY, 0) &&
// // // //     !isSiblings(root, x, y)
// // // //   );
// // // // };

// // // // const queue = [1, 2, 3, -1, 5, -1, 7];

// // // // const tree = createBinaryTreeWithBFS(queue);
// // // // console.log(tree);
// // // // console.log(isCousinsRecursive(tree, 2, 7));

// // // // const orangesRotting = function (grid) {
// // // //   const M = grid[0].length;
// // // //   const N = grid.length;
// // // //   let start;
// // // //   let fresh = false;
// // // //   const queue = [];

// // // //   for (let i = 0; i < grid.length; i++) {
// // // //     for (let j = 0; j < grid[i].length; j++) {
// // // //       if (grid[i][j] === 1) {
// // // //         fresh = true;
// // // //       }
// // // //       if (grid[i][j] === 2) {
// // // //         if (!start) {
// // // //           start = [i, j];
// // // //         }

// // // //         queue.push([i, j]);
// // // //       }
// // // //     }
// // // //   }
// // // //   if (!start && fresh) {
// // // //     return -1;
// // // //   }
// // // //   if (!fresh) return 0;

// // // //   const visited = [1];
// // // //   let count = 0;

// // // //   while (queue.length) {
// // // //     let levelLength = queue.length;
// // // //     let c = 0;
// // // //     while (levelLength--) {
// // // //       const [row, col] = queue.shift();
// // // //       const left = col - 1;
// // // //       const right = col + 1;
// // // //       const up = row - 1;
// // // //       const down = row + 1;

// // // //       if (left >= 0 && left < M) {
// // // //         if (grid[row][left] === 1) {
// // // //           grid[row][left] = 2;
// // // //           queue.push([row, left]);
// // // //           visited[left + row] = 1;
// // // //           c = 1;
// // // //         }
// // // //       }

// // // //       if (right >= 0 && right < M) {
// // // //         if (grid[row][right] === 1) {
// // // //           grid[row][right] = 2;
// // // //           queue.push([row, right]);
// // // //           visited[right + row] = 1;
// // // //           c = 1;
// // // //         }
// // // //       }

// // // //       if (up >= 0 && up < N) {
// // // //         if (grid[up][col] === 1) {
// // // //           grid[up][col] = 2;
// // // //           queue.push([up, col]);
// // // //           visited[up + col] = 1;
// // // //           c = 1;
// // // //         }
// // // //       }
// // // //       console.log(visited[down + col]);

// // // //       if (down >= 0 && down < N) {
// // // //         console.log(grid[down][col], down, col, 4444);

// // // //         if (grid[down][col] === 1) {
// // // //           grid[down][col] = 2;
// // // //           queue.push([down, col]);
// // // //           visited[down + col] = 1;
// // // //           c = 1;
// // // //         }
// // // //       }
// // // //     }
// // // //     count += c;
// // // //   }

// // // //   for (let i = 0; i < grid.length; i++) {
// // // //     for (let j = 0; j < grid[i].length; j++) {
// // // //       if (grid[i][j] === 1) {
// // // //         return -1;
// // // //       }
// // // //     }
// // // //   }
// // // //   console.log(grid);

// // // //   return count;
// // // // };

// // // // console.log(
// // // //   orangesRotting([
// // // //     [2, 1, 1],
// // // //     [1, 1, 1],
// // // //     [0, 1, 2],
// // // //   ])
// // // // );

// // const swapIfGreater = function (arr1, arr2, left, right) {
// //   // console.log(arr1[left], arr2[left], 111);

// //   if (arr1[left] > arr2[right]) {
// //     let temp = arr1[left];
// //     arr1[left] = arr2[right];
// //     arr2[right] = temp;
// //   }
// // };

// // const merge = function (arr1, arr2) {
// //   const n = arr1.length;
// //   const m = arr2.length;
// //   let gap = Math.ceil((arr1.length + arr2.length) / 2);

// //   while (gap > 0) {
// //     let left = 0;
// //     let right = gap;
// //     while (right < arr1.length + arr2.length) {
// //       if (left < arr1.length && right >= arr1.length) {
// //         // arr1 and arr2
// //         swapIfGreater(arr1, arr2, left, right - arr1.length);
// //       } else if (left >= arr1.length) {
// //         // arr2 and arr2
// //         swapIfGreater(arr2, arr2, left - arr1.length, right - arr1.length);
// //       } else if (right < arr1.length) {
// //         // arr1 and arr1
// //         swapIfGreater(arr1, arr1, left, right);
// //       }

// //       left++;
// //       right++;
// //     }
// //     if (gap === 1) break;
// //     gap = Math.ceil(gap / 2);
// //   }

// //   console.log(arr1);
// //   console.log(arr2);
// // };
// // const arr1 = [0, 0, 3];
// // const arr2 = [-1, 1, 1, 1, 2, 3];
// // merge(arr1, arr2);

// const isValidMove = function (row, col, mat) {
//   const M = mat.length;
//   const N = mat[0].length;
//   if (row >= 0 && row < N && col >= 0 && col < M) return true;
//   return false;
// };
// const bfs = function (initialRow, initialCol, mat) {
//   const queue = [[initialRow, initialCol]];
//   const moveRow = [-1, 1, 0, 0];
//   const moveCol = [0, 0, -1, 1];
//   mat[initialRow][initialCol] = "T";
//   while (queue.length !== 0) {
//     const [row, col] = queue.shift();
//     for (let i = 0; i < 4; i++) {
//       if (
//         isValidMove(i + moveRow[i], i + moveCol[i], mat) &&
//         mat[i + moveRow[i]][i + moveCol[i]] === "O"
//       ) {
//         queue.push([i + moveRow[i], i + moveCol[i]]);
//         mat[i + moveRow[i]][i + moveCol[i]] === "T";
//       }
//     }
//   }
// };

// var solve = function (mat) {
//   for (let i = 0; i < mat.length; i++) {
//     if (mat[0][i] === "O") {
//       bfs(0, i, mat);
//     }
//   }

//   for (let i = 1; i < mat.length; i++) {
//     if (mat[i][0] === "O") {
//       bfs(i, 0, mat);
//     }
//   }

//   for (let i = 1; i < mat.length; i++) {
//     if (mat[mat.length - 1][i] === "O") {
//       bfs(mat.length - 1, i, mat);
//     }
//     console.log(mat);
//   }

//   for (let i = 1; i < mat.length; i++) {
//     if (mat[i][mat[0].length - 1] === "O") {
//       bfs(i, mat[0].length - 1, mat);
//     }
//   }

//   for (let i = 0; i < mat.length; i++) {
//     for (let j = 0; j < mat[i].length; j++) {
//       if (mat[i][j] === "T") {
//         mat[i][j] = "O";
//       } else if (mat[i][j] === "O") {
//         mat[i][j] = "X";
//       }
//     }
//   }
// };

// solve([
//   ["X", "O", "X"],
//   ["X", "O", "X"],
//   ["X", "O", "X"],
// ]);

const isValidIndex = function (row, col, grid) {
  const totalRow = grid[0].length;
  const totalCol = grid.length;
  if (row >= 0 && row < totalCol && col >= 0 && col < totalRow) return true;
  return false;
};

const isNeighbour = function (parent, curRow, curCol) {
  if (
    (parent[0] !== curRow && parent[1] !== curCol) ||
    (parent[0] === curRow && parent[1] !== curCol) ||
    (parent[0] !== curRow && parent[1] === curCol)
  ) {
    return true;
  }

  return false;
};

const detectCycle = function (initialRow, initialCol, grid, visited) {
  visited[initialRow][initialCol] = 1;
  const queue = [];
  queue.push([initialRow, initialCol, [-1, -1]]);
  const row = [-1, 1, 0, 0];
  const col = [0, 0, -1, 1];

  while (queue.length !== 0) {
    const [curRow, curCol, parent] = queue.shift();
    if (initialRow === 0 && initialCol === 1) {
      console.log(curRow, curCol, parent, 102);
    }

    for (let i = 0; i < 4; i++) {
      if (initialRow === 0 && initialCol === 1) {
        console.log(i, 3201, queue);
      }

      if (
        isValidIndex(row[i] + curRow, curCol + col[i], grid) &&
        grid[row[i] + curRow][curCol + col[i]] === grid[curRow][curCol] &&
        !visited[row[i] + curRow][curCol + col[i]]
      ) {
        visited[row[i] + curRow][curCol + col[i]] = 1;
        queue.push([row[i] + curRow, curCol + col[i], [curRow, curCol]]);
      } else if (
        isValidIndex(row[i] + curRow, curCol + col[i], grid) &&
        visited[row[i] + curRow][curCol + col[i]] === 1 &&
        grid[row[i] + curRow][curCol + col[i]] === grid[curRow][curCol] &&
        isNeighbour(parent, row[i] + curRow, curCol + col[i])
      ) {
        return true;
      }
    }
  }

  return false;
};

var containsCycle = function (grid) {
  const visited = Array.from({ length: grid.length }, () => []);

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (!visited[i][j]) {
        // console.log(i, j);
        if (detectCycle(i, j, grid, visited)) {
          // console.log(i, j);

          return true;
        }
      }
    }
  }
  console.log(21);

  return false;
};

containsCycle([
  ["a", "b", "b"],
  ["b", "z", "b"],
  ["b", "b", "a"],
]);

// class TreeNode {
//   constructor(value, left, right) {
//     this.value = value;
//     this.left = left || null;
//     this.right = right || null;
//   }
// }

// const buildBinaryTreeDFS = function (arr) {
//   const value = arr.shift();

//   if (value === -1 || value === null || value === undefined) {
//     return null;
//   }

//   const treeNode = new TreeNode(value);

//   treeNode.left = buildBinaryTreeDFS(arr);
//   treeNode.right = buildBinaryTreeDFS(arr);
//   return treeNode;
// };

// const arr = [1, 2, 3, 4, -1, -1, 5, -1, -1, 6, -1, -1, 7, 8, -1, -1, 9, -1, -1];
// const tree = buildBinaryTreeDFS(arr);
// console.log(tree);

// const buildBinaryTree = function (arr, index) {
//   if (arr[index] === -1 || arr[index] === null || arr[index] === undefined) {
//     return null;
//   }

//   const treeNode = new TreeNode(arr[index]);
//   console.log(index);

//   treeNode.left = buildBinaryTree(arr, 2 * index + 1);
//   treeNode.right = buildBinaryTree(arr, 2 * index + 2);
//   return treeNode;
// };

// const buildBinaryTreeWithBFS = function (queue) {
//   const value = queue.shift();
//   const root = new TreeNode(value);
//   const internalQueue = [root];

//   while (queue.length !== 0) {
//     const temp = internalQueue.shift();

//     const leftValue = queue.shift();
//     const rightValue = queue.shift();

//     if (leftValue !== -1 || leftValue === undefined || leftValue === null) {
//       temp.left = new TreeNode(leftValue);
//       internalQueue.push(temp.left);
//     }

//     if (rightValue !== -1 || rightValue === undefined || rightValue === null) {
//       temp.right = new TreeNode(rightValue);
//       internalQueue.push(temp.right);
//     }
//   }

//   return root;
// };

// const queue = [
//   1, 2, 3, 4, 5, 6, 7, 8, 10, -1, 9, -1, -1, 16, 19, -1, -1, 20, -1, -1, -1, -1,
//   -1, -1, -1, 22, 23, 24, -1, -1, -1,
// ];
// const root = buildBinaryTreeWithBFS(queue);
// console.log(root);

// let l = 0;
// let r = 0;

// const findLeftAndRight = function (root, index) {
//   if (!root) return;

//   l = Math.min(l, index);
//   r = Math.max(r, index);

//   findLeftAndRight(root.left, index - 1);
//   findLeftAndRight(root.right, index + 1);
// };

// const topView = function () {
//   const ans = [];
//   findLeftAndRight(root, 0);
//   const queue = [root];
//   const index = [-1 * l];

//   while (queue.length) {
//     const first = queue.shift();
//     const firstIndex = index.shift();
//     if (!ans[firstIndex]) {
//       ans[firstIndex] = first.value;
//     }

//     if (first.left) {
//       queue.push(first.left);
//       index.push(firstIndex - 1);
//     }

//     if (first.right) {
//       queue.push(first.right);
//       index.push(firstIndex + 1);
//     }
//   }
//   console.log(ans);

//   return ans;
// };
// // topView();

// const bottomView = function () {
//   findLeftAndRight(root, 0);
//   const ans = [];
//   const queue = [root];
//   const index = [-1 * l];
//   while (queue.length) {
//     const first = queue.shift();
//     const firstIndex = index.shift();

//     ans[firstIndex] = first.value;
//     if (first.left) {
//       queue.push(first.left);
//       index.push(firstIndex - 1);
//     }

//     if (first.right) {
//       queue.push(first.right);
//       index.push(firstIndex + 1);
//     }
//   }
//   console.log(ans);
// };

// // bottomView();

// // Trie DS
// const prefixTree = {
//   childrens: {
//     a: {
//       childrens: {
//         p: {
//           childrens: {
//             p: {
//               childrens: {
//                 l: {
//                   childrens: {
//                     e: {
//                       childrens: {},
//                       wordEnd: true,
//                     },
//                   },
//                   wordEnd: false,
//                 },
//               },
//               wordEnd: false,
//             },
//           },
//           wordEnd: false,
//         },
//       },
//       wordEnd: true,
//     },
//   },
//   wordEnd: false,
// };

// class Node {
//   constructor(value, left, right) {
//     this.value = value;
//     this.left = left || null;
//     this.right = right || null;
//     this.height = 1;
//   }
// }

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

export const buildAVLTree = function (root, value) {
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

// const inorder = function (root, ans) {
//   if (!root) return;

//   inorder(root.left, ans);
//   ans.push(root.value);
//   inorder(root.right, ans);
// };

// let rootAvl = null;
// rootAvl = buildAVLTree(rootAvl, 30);
// rootAvl = buildAVLTree(rootAvl, 60);
// rootAvl = buildAVLTree(rootAvl, 80);
// rootAvl = buildAVLTree(rootAvl, 10);

// console.log(rootAvl);
// const ans = [];
// inorder(rootAvl, ans);
// console.log(ans);

// class SubtreeMetaData {
//   constructor(value) {
//     this.isBST = true;
//     this.length = 1;
//     this.min = value;
//     this.max = value;
//   }
// }

// class LargestBST {
//   constructor({ length, rootValue, leftMin, leftMax, rightMin, rightMax }) {
//     this.length = length;
//     this.root = rootValue;
//     this.leftMin = leftMin;
//     this.leftMax = leftMax;
//     this.rightMin = rightMin;
//     this.rightMax = rightMax;
//   }
// }

// let largestBST = null;

// const calcLargestBST = function (root) {
//   if (root.left === null && root.right === null) {
//     if (largestBST && largestBST.length < 1) {
//       largestBST = new LargestBST({
//         length: 1,
//         rootValue: root.value,
//         leftMin: root.value,
//         leftMax: root.value,
//         rightMin: root.value,
//         rightMax: root.value,
//       });
//     } else if (!largestBST) {
//       largestBST = new LargestBST({
//         length: 1,
//         rootValue: root.value,
//         leftMin: root.value,
//         leftMax: root.value,
//         rightMin: root.value,
//         rightMax: root.value,
//       });
//     }
//     return new SubtreeMetaData(root.value);
//   }

//   if (root.left && !root.right) {
//     const leftSubtreeMetaData = calcLargestBST(root.left);
//     if (leftSubtreeMetaData.isBST && leftSubtreeMetaData.max < root.value) {
//       leftSubtreeMetaData.length++;

//       if (largestBST.length < leftSubtreeMetaData.length) {
//         largestBST = new LargestBST({
//           length: leftSubtreeMetaData.length,
//           rootValue: root.value,
//           leftMin: leftSubtreeMetaData.min,
//           leftMax: leftSubtreeMetaData.max,
//           rightMin: NaN,
//           rightMax: NaN,
//         });
//       }

//       leftSubtreeMetaData.max = root.value;
//       return leftSubtreeMetaData;
//     } else {
//       leftSubtreeMetaData.isBST = false;
//       return leftSubtreeMetaData;
//     }
//   }

//   if (!root.left && root.right) {
//     const rightSubtreeMetaData = calcLargestBST(root.right);
//     if (rightSubtreeMetaData.isBST && rightSubtreeMetaData.min > root.value) {
//       rightSubtreeMetaData.length++;

//       if (largestBST.length < rightSubtreeMetaData.length) {
//         largestBST = new LargestBST({
//           length: rightSubtreeMetaData.length,
//           rootValue: root.value,
//           leftMin: NaN,
//           leftMax: NaN,
//           rightMin: rightSubtreeMetaData.min,
//           rightMax: rightSubtreeMetaData.max,
//         });
//       }
//       rightSubtreeMetaData.min = root.value;
//       return rightSubtreeMetaData;
//     } else {
//       rightSubtreeMetaData.isBST = false;
//       return rightSubtreeMetaData;
//     }
//   }

//   if (root.left && root.right) {
//     const leftSubtreeMetaData = calcLargestBST(root.left);
//     const rightSubtreeMetaData = calcLargestBST(root.right);

//     if (
//       leftSubtreeMetaData.isBST &&
//       rightSubtreeMetaData.isBST &&
//       leftSubtreeMetaData.max < root.value &&
//       rightSubtreeMetaData.min > root.value
//     ) {
//       const subtreeMetaData = new SubtreeMetaData(root.value);
//       subtreeMetaData.length =
//         1 + leftSubtreeMetaData.length + rightSubtreeMetaData.length;
//       subtreeMetaData.min = leftSubtreeMetaData.min;
//       subtreeMetaData.max = rightSubtreeMetaData.max;

//       if (largestBST.length < subtreeMetaData.length) {
//         largestBST = new LargestBST({
//           length: subtreeMetaData.length,
//           rootValue: root.value,
//           leftMin: leftSubtreeMetaData.min,
//           leftMax: leftSubtreeMetaData.max,
//           rightMin: rightSubtreeMetaData.min,
//           rightMax: rightSubtreeMetaData.max,
//         });
//       }

//       return subtreeMetaData;
//     } else {
//       leftSubtreeMetaData.isBST = false;
//       return leftSubtreeMetaData;
//     }
//   }
// };

// const binaryTree = buildBinaryTreeWithBFS([
//   10, 20, 30, 12, 19, 20, 40, -1, -1, -1, -1, 15, 25, 35, 45,
// ]);

// // console.log(binaryTree);
// // const largest = calcLargestBST(binaryTree);
// // console.log(largestBST);

class Heap {
  constructor(length) {
    this.arr = [];
    this.numOfElements = 0;
    this.length = length;
  }
}

const maxHeap = function (arr, index, length) {
  let largest = index;
  let left = 2 * index + 1;
  let right = 2 * index + 2;

  if (left < length && arr[left] >= arr[largest]) {
    largest = left;
  }

  if (right < length && arr[right] >= arr[largest]) {
    largest = right;
  }

  if (largest !== index) {
    let temp = arr[largest];
    arr[largest] = arr[index];
    arr[index] = temp;
    maxHeap(arr, largest, length);
  }
};

const buildMaxHeap = function (arr) {
  for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
    maxHeap(arr, i, arr.length);
  }
};

const sortMaxHeap = function (arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    let temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;
    maxHeap(arr, 0, i);
  }
};

const arr = [10, 20, 13, 30, 25, 70, 45, 83, 20];
// buildMaxHeap(arr);
// sortMaxHeap(arr);

// console.log(arr);

// IELTS 1
// https://lnkd.in/gCVEEA8a

// IELTS 2
// https://lnkd.in/gV2v3izY

// IELTS 3
// https://lnkd.in/gphxCgCA

// GRE 1
// https://lnkd.in/gJGTHeFv

// GRE 2
// https://lnkd.in/gd2pCqk2

// GRE 3
// https://lnkd.in/gphxCgCA

// GMAT
// https://lnkd.in/gtCdxjd3

// TOEFL
// https://lnkd.in/geKev8mY

// 1/ The Pragmatic Programmer:
// It'll teach you the core software development process.
// Authors: Dave Thomas & Andy Hunt

// 2/ The Mythical Man-Month:
// It'll give you advice and opinions on the management of large-scale projects.
// Author: Fred Brooks

// 3/ Refactoring:
// It'll give you techniques to restructure code to enhance its maintainability.
// Authors: Kent Beck & Martin Fowler

// 4/ Working Effectively with Legacy Code:
// It'll teach you techniques to refactor legacy code.
// Author: Michael C. Feathers

// 5/ Clean Code:
// It'll teach you practices to write code that is easy to understand and refactor.
// Author: Robert C. Martin

// 6/ Domain-Driven Design:
// It'll teach you principles and patterns to design complex software systems.
// Author: Eric Evans

// 7/ Why Programs Fail:
// It'll teach you systematic debugging.
// Author: Andreas Zeller

// 8/ Designing Data-Intensive Applications:
// It'll teach you distributed systems.
// Author: Martin Kleppmann

// What else would you add?
// Structure and Interpretation of Computer Programs, 2nd ed.
// Statistics without Tears: An Introduction for Non-Mathematicians Rowntree, Derek
// C Programming: A Modern Approach, 2nd Edition

// ******* map vs forEach *********

// map always takes the array and transform the array into something else - that something is whatever you told in the callback function and whatever you return from the callback for each iteration, it will place that return value into the new array. This will happen on every element of the given array.
// After the iteration Map will give you the new array. Always returns a new array, no alteration happens in the original array.

// In the case of forEach, it is an alternative of "for loop". In for loop we always write a line like this:
// for(i = 0; i < 10; i++){} basically in forEach we don't have to write this line.
// So now tell me, is there any possibility that this style of looping "for(i = 0; i < 10; i++){}" will give us a new array on every iteration magically? It can calculate something based on the code we write inside and only place the result of the calculation in the new array if we create a global variable outside of this and push that to that array on each iteration.

// ******* map vs forEach *********
