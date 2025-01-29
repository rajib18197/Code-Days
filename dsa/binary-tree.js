// // // // // class TreeNode {
// // // // //   constructor(value, left, right) {
// // // // //     this.value = value;
// // // // //     this.left = left || null;
// // // // //     this.right = right || null;
// // // // //   }
// // // // // }

// // // // // // // class BinaryTree {
// // // // // // //   constructor(queue) {
// // // // // // //     this.root = null;
// // // // // // //     this.queue = queue;
// // // // // // //   }

// // // // // // //   createBinaryTreeWithBFS(queue) {
// // // // // // //     const value = queue[0];
// // // // // // //     this.root = new TreeNode(value);
// // // // // // //     const internalQueue = [this.root];
// // // // // // //     queue.shift();

// // // // // // //     while (queue.length !== 0) {
// // // // // // //       const temp = internalQueue.shift();
// // // // // // //       const leftValue = queue.shift();
// // // // // // //       const rightValue = queue.shift();

// // // // // // //       if (leftValue !== null) {
// // // // // // //         temp.left = new TreeNode(leftValue);
// // // // // // //         internalQueue.push(temp.left);
// // // // // // //       }

// // // // // // //       if (rightValue !== null) {
// // // // // // //         temp.right = new TreeNode(rightValue);
// // // // // // //         internalQueue.push(temp.right);
// // // // // // //       }
// // // // // // //     }

// // // // // // //     return this.root;
// // // // // // //   }

// // // // // // //   build() {
// // // // // // //     this.createBinaryTreeWithBFS(this.queue);
// // // // // // //   }
// // // // // // // }

// // // // // // // const createBinaryTreeWithBFS = function (queue) {
// // // // // // //   const value = queue[0];
// // // // // // //   const root = new TreeNode(value);
// // // // // // //   const internalQueue = [root];
// // // // // // //   queue.shift();

// // // // // // //   while (queue.length !== 0) {
// // // // // // //     const temp = internalQueue.shift();
// // // // // // //     const leftValue = queue.shift();
// // // // // // //     const rightValue = queue.shift();

// // // // // // //     if (leftValue !== null) {
// // // // // // //       temp.left = new TreeNode(leftValue);
// // // // // // //       internalQueue.push(temp.left);
// // // // // // //     }

// // // // // // //     if (rightValue !== null) {
// // // // // // //       temp.right = new TreeNode(rightValue);
// // // // // // //       internalQueue.push(temp.right);
// // // // // // //     }
// // // // // // //   }

// // // // // // //   return root;
// // // // // // // };

// // // // // // // // A queue is given, and we traversed by breadth wise, to build a tree DS (iterative way).
// // // // // // // // const queue = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1];
// // // // // // // // const queue = [20, 8, 22, 4, 12, 10, 14];
// // // // // // // // const binaryTree = new BinaryTree(queue);
// // // // // // // // binaryTree.build();
// // // // // // // // console.log(binaryTree.root);
// // // // // // // // console.log(queue);
// // // // // // // let index = 0;
// // // // // // // // const buildTree = function (node, inorder, levelorder) {
// // // // // // // //   // console.log(index);

// // // // // // // //   if (index >= levelorder.length) {
// // // // // // // //     return;
// // // // // // // //   }
// // // // // // // //   let findL = inorder.indexOf(levelorder[index]);
// // // // // // // //   let findR = inorder.indexOf(levelorder[index + 1]);
// // // // // // // //   if (findL === -1) {
// // // // // // // //     findR = inorder.indexOf(levelorder[index]);
// // // // // // // //   }

// // // // // // // //   const find2 = inorder.indexOf(node.value); // 3
// // // // // // // //   if (findL === -1 && findR === -1) {
// // // // // // // //     return;
// // // // // // // //   }

// // // // // // // //   if (findL < find2 && findR > find2) {
// // // // // // // //     node.left = new TreeNode(levelorder[index]);
// // // // // // // //     index
// // // // // // // //     buildTree(node.left, inorder, levelorder, index + 2);
// // // // // // // //     node.right = new TreeNode(levelorder[index + 1]);
// // // // // // // //     buildTree(node.right, inorder, levelorder, index + 3);
// // // // // // // //   } else if (findL !== -1 && findL < find2) {
// // // // // // // //     node.left = new TreeNode(levelorder[index]);
// // // // // // // //     buildTree(node.left, inorder, levelorder, index + 1);
// // // // // // // //   } else if (findR !== -1 && findR > find2) {
// // // // // // // //     node.right = new TreeNode(levelorder[index]);
// // // // // // // //     buildTree(node.right, inorder, levelorder, index + 1);
// // // // // // // //   }
// // // // // // // // };
// // // // // // const createHashMap = function (inorder) {
// // // // // //   const hashMap = {};

// // // // // //   for (let i = 0; i < inorder.length; i++) {
// // // // // //     hashMap[inorder[i]] = i;
// // // // // //   }

// // // // // //   return hashMap;
// // // // // // };

// // // // // // let indexGlobal = 0;
// // // // // // let hashMap1, hashMap2;

// // // // // // const constructTree = function (leftIndex, rightIndex, inorder, levelorder) {
// // // // // //   if (leftIndex > rightIndex) {
// // // // // //     return null;
// // // // // //   }
// // // // // //   let min = Number.MAX_VALUE;
// // // // // //   for (let i = leftIndex; i <= rightIndex; i++) {
// // // // // //     if (levelorder.indexOf(inorder[i]) < min) {
// // // // // //       min = levelorder.indexOf(inorder[i]);
// // // // // //     }
// // // // // //   }
// // // // // //   // console.log(min, hashMap1[levelorder[min]], levelorder[min]);

// // // // // //   let value = levelorder[min];
// // // // // //   let index = hashMap1[levelorder[min]];
// // // // // //   const node = new TreeNode(value);
// // // // // //   node.left = constructTree(leftIndex, index - 1, inorder, levelorder);
// // // // // //   node.right = constructTree(index + 1, rightIndex, inorder, levelorder);
// // // // // //   return node;
// // // // // // };

// // // // // // const preorder = function (node) {
// // // // // //   if (!node) return;
// // // // // //   console.log(node.value);
// // // // // //   preorder(node.left);
// // // // // //   preorder(node.right);
// // // // // // };

// // // // // // function printInorder(head) {
// // // // // //   if (!head) {
// // // // // //     return;
// // // // // //   }
// // // // // //   printInorder(head.left);
// // // // // //   console.log(head.value);
// // // // // //   printInorder(head.right);
// // // // // // }
// // // // // // const inorder1 = [4, 2, 5, 1, 3, 6];
// // // // // // const levelorder1 = [1, 2, 3, 4, 5, 6];
// // // // // // const inorder = [4, 8, 10, 12, 14, 20, 22];
// // // // // // const levelorder = [20, 8, 22, 4, 12, 10, 14];

// // // // // // // const inorder = [1, 0, 2];
// // // // // // // const levelorder = [0, 1, 2];
// // // // // // hashMap1 = createHashMap(inorder);
// // // // // // // hashMap2 = createHashMap(levelorder);
// // // // // // // console.log(hashMap);
// // // // // // const root = constructTree(0, levelorder.length - 1, inorder, levelorder);
// // // // // // // console.log(root);
// // // // // // // preorder(root);
// // // // // // printInorder(root);
// // // // // // // hashMap1 = createHashMap(inorder1);
// // // // // // // const root1 = constructTree(0, levelorder1.length - 1, inorder1, levelorder1);
// // // // // // // console.log(root1);
// // // // // // // preorder(root1);

// // // // // // ************ Construct Binary Tree from inorder and levelorder ***********//

// // // // // // class Node {
// // // // // //   constructor(x) {
// // // // // //     this.key = x;
// // // // // //     this.left = null;
// // // // // //     this.right = null;
// // // // // //   }
// // // // // // }
// // // // // // class Solution {
// // // // // //   constructor() {
// // // // // //     this.hashMap1 = {};
// // // // // //     this.hashMap2 = {};
// // // // // //     this.arr = [];
// // // // // //   }

// // // // // //   constructTree(leftIndex, rightIndex, inorder, levelorder) {
// // // // // //     if (leftIndex > rightIndex) {
// // // // // //       return null;
// // // // // //     }
// // // // // //     let min = Number.MAX_VALUE;
// // // // // //     for (let i = leftIndex; i <= rightIndex; i++) {
// // // // // //       const val = this.hashMap2[inorder[i]];
// // // // // //       if (val < min) {
// // // // // //         min = val;
// // // // // //       }
// // // // // //     }

// // // // // //     let value = levelorder[min];
// // // // // //     let index = this.hashMap1[levelorder[min]];
// // // // // //     const node = new Node(value);
// // // // // //     node.left = this.constructTree(leftIndex, index - 1, inorder, levelorder);
// // // // // //     node.right = this.constructTree(index + 1, rightIndex, inorder, levelorder);
// // // // // //     return node;
// // // // // //   }
// // // // // //   preorder(node) {
// // // // // //     if (node === null) return;
// // // // // //     this.arr.push(node.key);
// // // // // //     this.preorder(node.left);
// // // // // //     this.preorder(node.right);
// // // // // //   }

// // // // // //   buildTree(inorder, levelorder, n) {
// // // // // //     //code here
// // // // // //     this.arr = [];
// // // // // //     this.hashMap1 = {};
// // // // // //     this.hashMap2 = {};
// // // // // //     for (let i = 0; i < inorder.length; i++) {
// // // // // //       this.hashMap1[inorder[i]] = i;
// // // // // //     }

// // // // // //     for (let i = 0; i < levelorder.length; i++) {
// // // // // //       this.hashMap2[levelorder[i]] = i;
// // // // // //     }

// // // // // //     const root = this.constructTree(
// // // // // //       0,
// // // // // //       levelorder.length - 1,
// // // // // //       inorder,
// // // // // //       levelorder
// // // // // //     );

// // // // // //     this.preorder(root);
// // // // // //     console.log(this.arr.join(" "));
// // // // // //     const res = this.arr.join(" ");
// // // // // //     return res;
// // // // // //   }
// // // // // // }

// // // // // // const inorder1 = [4, 8, 10, 12, 14, 20, 22];
// // // // // // const levelorder1 = [20, 8, 22, 4, 12, 10, 14];
// // // // // // const s = new Solution();
// // // // // // s.buildTree(inorder1, levelorder1);

// // // // // // ************ Construct Binary Tree from inorder and levelorder ***********//

// // // // // const minimumCoinsRequired = function (index, target, coins, cache) {
// // // // //   if (index === 0) {
// // // // //     if (target % coins[0] === 0) {
// // // // //       return target / coins[0];
// // // // //     }
// // // // //     return 1e9;
// // // // //   }

// // // // //   if (cache[index][target] !== -1) {
// // // // //     return cache[index][target];
// // // // //   }

// // // // //   const notTake = 0 + minimumCoinsRequired(index - 1, target, coins, cache);
// // // // //   let take = Number.MAX_VALUE;
// // // // //   if (coins[index] <= target) {
// // // // //     take = 1 + minimumCoinsRequired(index, target - coins[index], coins, cache);
// // // // //   }

// // // // //   return (cache[index][target] = notTake < take ? notTake : take);
// // // // // };

// // // // // const coinsRequiredWithMemoization = function (index, T, coins) {
// // // // //   const cache = Array.from({ length: coins.length }, () =>
// // // // //     Array.from({ length: T + 1 }, () => -1)
// // // // //   );
// // // // //   console.log(minimumCoinsRequired(index, T, coins, cache));
// // // // //   console.log(cache);
// // // // // };

// // // // // const coinsRequiredWithTabulation = function (T, coins) {
// // // // //   const cache = Array.from({ length: coins.length }, () =>
// // // // //     Array.from({ length: T + 1 }, () => 0)
// // // // //   );
// // // // //   let prev = [];
// // // // //   const cur = [];

// // // // //   for (let target = 0; target <= T; target++) {
// // // // //     if (target % coins[0] === 0) {
// // // // //       // cache[0][target] = target / coins[0];
// // // // //       prev[target] = target / coins[0];
// // // // //     } else {
// // // // //       // cache[0][target] = 1e9;
// // // // //       prev[target] = 1e9;
// // // // //     }
// // // // //   }

// // // // //   for (let index = 1; index < coins.length; index++) {
// // // // //     for (let target = 0; target <= T; target++) {
// // // // //       // const notTake = 0 + cache[index - 1][target];
// // // // //       const notTake = 0 + prev[target];
// // // // //       let take = Number.MAX_VALUE;
// // // // //       if (coins[index] <= target) {
// // // // //         // take = 1 + cache[index][target - coins[index]];
// // // // //         take = 1 + prev[target - coins[index]];
// // // // //       }
// // // // //       // cache[index][target] = notTake < take ? notTake : take;
// // // // //       // cur[target] = notTake < take ? notTake : take;
// // // // //       prev[target] = notTake < take ? notTake : take;
// // // // //     }
// // // // //     // prev = cur;
// // // // //   }

// // // // //   // console.log(cache);
// // // // //   console.log(prev);

// // // // //   // console.log(cache[coins.length - 1][T]);
// // // // // };

// // // // // const T = 7;
// // // // // const coins = [1, 2, 3];
// // // // // // coinsRequiredWithMemoization(2, 7, coins);
// // // // // // coinsRequiredWithTabulation(T, coins);

// // // // // const lcs = function (index1, index2, s1, s2) {
// // // // //   if (index1 === 0 || index2 === 0) {
// // // // //     return 0;
// // // // //   }

// // // // //   if (s1[index1 - 1] === s2[index2 - 1]) {
// // // // //     return 1 + lcs(index1 - 1, index2 - 1, s1, s2);
// // // // //   }
// // // // //   const first = lcs(index1 - 1, index2, s1, s2);
// // // // //   const second = lcs(index1, index2 - 1, s1, s2);
// // // // //   return Math.max(first, second);
// // // // // };

// // // // // const lcsTabulation = function (s1, s2) {
// // // // //   const cache = Array.from({ length: s1.length + 1 }, () =>
// // // // //     Array.from({ length: s2.length + 1 }, () => -1)
// // // // //   );

// // // // //   for (let index2 = 0; index2 <= s2.length; index2++) {
// // // // //     cache[0][index2] = 0;
// // // // //   }

// // // // //   for (let index1 = 0; index1 <= s1.length; index1++) {
// // // // //     cache[index1][0] = 0;
// // // // //   }
// // // // //   // console.log(cache);

// // // // //   for (let index1 = 1; index1 <= s1.length; index1++) {
// // // // //     for (let index2 = 1; index2 <= s2.length; index2++) {
// // // // //       if (s1[index1 - 1] === s2[index2 - 1]) {
// // // // //         cache[index1][index2] = 1 + cache[index1 - 1][index2 - 1];
// // // // //         continue;
// // // // //       }

// // // // //       const first = cache[index1 - 1][index2];
// // // // //       const second = cache[index1][index2 - 1];
// // // // //       cache[index1][index2] = Math.max(first, second);
// // // // //     }
// // // // //   }

// // // // //   console.log(cache);
// // // // // };

// // // // // lcsTabulation("ace", "cge");

// // // // // // console.log(lcs(3, 3, "ace", "cge"));
// // // // var maximalSquare = function (mat) {
// // // //   const grid = Array.from({ length: mat.length }, () => []);

// // // //   for (let i = 0; i < mat.length; i++) {
// // // //     for (let j = 0; j < mat[i].length; j++) {
// // // //       grid[i][j] = Number(mat[i][j]);
// // // //     }
// // // //   }

// // // //   let maxi = -1;
// // // //   for (let i = 1; i < grid.length; i++) {
// // // //     for (let j = 1; j < grid[i].length; j++) {
// // // //       if (grid[i][j] === 0) continue;
// // // //       if (grid[i][j - 1] && grid[i - 1][j - 1] && grid[i - 1][j]) {
// // // //         if (
// // // //           grid[i][j - 1] === grid[i - 1][j - 1] &&
// // // //           grid[i - 1][j - 1] === grid[i - 1][j]
// // // //         ) {
// // // //           grid[i][j] = grid[i][j - 1] + 1;
// // // //           maxi = Math.max(maxi, grid[i][j]);
// // // //           continue;
// // // //         }
// // // //         const a = grid[i][j - 1];
// // // //         const b = grid[i - 1][j - 1];
// // // //         const c = grid[i - 1][j];

// // // //         const diff1 = Math.abs(a - b);
// // // //         const diff2 = Math.abs(a - c);
// // // //         const diff3 = Math.abs(b - c);

// // // //         if (diff1 > 1) {
// // // //           grid[i][j] = Math.min(a, b) + 1;
// // // //           maxi = Math.max(maxi, grid[i][j]);
// // // //           continue;
// // // //         }
// // // //         if (diff2 > 1) {
// // // //           grid[i][j] = Math.min(a, c) + 1;
// // // //           maxi = Math.max(maxi, grid[i][j]);
// // // //           continue;
// // // //         }
// // // //         if (diff3 > 1) {
// // // //           grid[i][j] = Math.min(b, c) + 1;
// // // //           maxi = Math.max(maxi, grid[i][j]);
// // // //           continue;
// // // //         }

// // // //         const max = Math.max(
// // // //           grid[i][j - 1],
// // // //           grid[i - 1][j - 1],
// // // //           grid[i - 1][j]
// // // //         );
// // // //         grid[i][j] = max;
// // // //         maxi = Math.max(maxi, grid[i][j]);
// // // //       }
// // // //     }
// // // //   }

// // // //   if (maxi === -1) {
// // // //     for (let i = 0; i < grid.length; i++) {
// // // //       for (let j = 0; j < grid[i].length; j++) {
// // // //         if (grid[i][j] === 1) return 1;
// // // //       }
// // // //     }
// // // //     return 0;
// // // //   }

// // // //   return maxi * maxi;
// // // // };

// // // // const max = maximalSquare([
// // // //   ["1", "0", "1", "0", "0"],
// // // //   ["1", "0", "1", "1", "1"],
// // // //   ["1", "1", "1", "1", "1"],
// // // //   ["1", "0", "0", "1", "0"],
// // // // ]);

// // // // console.log(max);

// // const calcTotalUUID = function () {
// // const numOfLetters = 26;
// // const numOfDigits = 10;
// // const digitsRequire = 6;
// //   // prettier-ignore
// //   const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// //   const digitPermutations = [];
// //   // 0 = 0 - 5
// //   // 1 = 1 - 6
// //   // 2 = 2 - 7
// //   for (let i = 0; i <= numOfDigits - digitsRequire; i++) {
// //     const arr = [];
// //     for (let j = i; j < i + 6; j++) {
// //       arr.push(j);
// //     }
// //     digitPermutations.push(arr);
// //   }

// //   const set = new Set();
// //   console.log(digitPermutations);

// //   for (let i = 0; i < digitPermutations.length; i++) {
// //     Permutations(digitPermutations[i]);
// //   }

// //   function Permutations(arr) {
// //     const res = [];

// //     function generatePermutations(arr, start) {
// //       if (start === arr.length - 1) {
// //         if (!set.has(Number(arr.join("")))) {
// //           set.add(Number(arr.join("")));
// //         }
// //         res.push([...arr]);

// //         return;
// //       }
// //       for (let i = start; i < arr.length; i++) {
// //         [arr[start], arr[i]] = [arr[i], arr[start]];
// //         generatePermutations(arr, start + 1);
// //         [arr[start], arr[i]] = [arr[i], arr[start]];
// //       }
// //     }
// //     generatePermutations(arr, 0);
// //     // console.log(res.length);
// //   }

// //   console.log(set.size);

// //   const ids = new Set();

// //   for (let el of set) {
// //     let str = "icb";
// //     str += el.toString().length === 5 ? `0${el.toString()}` : el.toString();
// //     for (let i = 0; i < 26; i++) {
// //       str += letters[i]; //
// //       ids.add(str);
// //       str = str.slice(0, str.length - 1);
// //     }
// //   }

// //   console.log(ids);
// //   console.log(ids.size, 12121);

// //   return { uuidLength: set.size * numOfLetters, ids };
// // };

// // const uuid = calcTotalUUID();

// // // const searchInRotatedSorted = function (arr, target) {
// // //   let start = 0;
// // //   let end = arr.length - 1;

// // //   while (start <= end) {
// // //     const mid = Math.floor((start + end) / 2);
// // //     if (arr[mid] === target) {
// // //       return mid;
// // //     }
// // //     // Identify the sorted portion
// // //     if (arr[start] <= arr[mid]) {
// // //       // means left portion is sorted
// // //       if (arr[start] <= target && target <= arr[mid]) {
// // //         // means target lies in between start and mid
// // //         end = mid - 1;
// // //       } else {
// // //         // arr[start] >= target && target <= arr[end]
// // //         // means target lies outside of range start to mid
// // //         start = mid + 1;
// // //       }
// // //     } else {
// // //       // arr[start] > arr[mid] means right portion is sorted
// // //       if (arr[mid] <= target && target <= arr[end]) {
// // //         // target lies in between mid and end
// // //         start = mid + 1;
// // //       } else {
// // //         // arr[mid] >= target && target <= arr[end]
// // //         // means target lies outside of range mid to end;
// // //         end = mid - 1;
// // //       }
// // //     }
// // //   }
// // // };

// // // // const arr = [7, 8, 9, 1, 2, 3, 4, 5, 6];
// // // // const index = searchInRotatedSorted(arr, 1);
// // // // console.log(index);

// // // const maxFruitsMemoization = function (i, j1, j2, grid, cache) {
// // //   if (j1 < 0 || j1 >= grid[0].length || j2 < 0 || j2 >= grid[0].length) {
// // //     return -1e8;
// // //   }

// // //   if (i === grid.length - 1) {
// // //     if (j1 === j2) {
// // //       return grid[i][j1];
// // //     }

// // //     return grid[i][j1] + grid[i][j2];
// // //   }

// // //   if (cache[i][j1][j2] !== -1) {
// // //     return cache[i][j1][j2];
// // //   }

// // //   let max = -1e8;
// // //   for (let newJ1 = -1; newJ1 <= 1; newJ1++) {
// // //     for (let newJ2 = -1; newJ2 <= 1; newJ2++) {
// // //       if (j1 === j2) value = grid[i][j1];
// // //       else value = grid[i][j1] + grid[i][j2];

// // //       value += maxFruitsMemoization(i + 1, j1 + newJ1, j2 + newJ2, grid, cache);

// // //       if (value > max) {
// // //         max = value;
// // //       }
// // //     }
// // //   }
// // //   return (cache[i][j1][j2] = max);
// // // };

// // // const maxFruitsTabulation = function (grid) {
// // //   const cache = Array.from({ length: grid.length }, () =>
// // //     Array.from({ length: grid[0].length }, () =>
// // //       Array.from({ length: grid[0].length }, () => 0)
// // //     )
// // //   );

// // //   const lastRow = grid.length - 1;

// // //   for (let j1 = 0; j1 < grid[0].length; j1++) {
// // //     for (let j2 = 0; j2 < grid[0].length; j2++) {
// // //       if (j1 === j2) cache[lastRow][j1][j2] = grid[lastRow][j1];
// // //       else cache[lastRow][j1][j2] = grid[lastRow][j1] + grid[lastRow][j2];
// // //     }
// // //   }

// // //   for (let i = lastRow - 1; i >= 0; i--) {
// // //     for (let j1 = 0; j1 < grid[0].length; j1++) {
// // //       for (let j2 = 0; j2 < grid[0].length; j2++) {
// // //         let max = -1e8;
// // //         for (let newJ1 = -1; newJ1 <= 1; newJ1++) {
// // //           for (let newJ2 = -1; newJ2 <= 1; newJ2++) {
// // //             if (j1 === j2) value = grid[i][j1];
// // //             else value = grid[i][j1] + grid[i][j2];

// // //             if (
// // //               j1 + newJ1 < 0 ||
// // //               j1 + newJ1 >= grid[i].length ||
// // //               j2 + newJ2 < 0 ||
// // //               j2 + newJ2 >= grid[i].length
// // //             ) {
// // //               value += -1e8;
// // //             } else {
// // //               // console.log(i, j1, j2, j1 + newJ1, j2 + newJ2, newJ1, newJ2);

// // //               value += cache[i + 1][j1 + newJ1][j2 + newJ2];
// // //             }

// // //             if (value > max) {
// // //               max = value;
// // //             }
// // //           }
// // //         }
// // //         cache[i][j1][j2] = max;
// // //       }
// // //     }
// // //   }

// // //   console.log(cache);
// // //   return cache[0][0][grid[0].length - 1];
// // // };

// // // const maxFruitsSpaceOptimization = function (grid) {
// // //   let cache = Array.from({ length: grid[0].length }, () =>
// // //     Array.from({ length: grid[0].length }, () => 0)
// // //   );
// // //   let curr = Array.from({ length: grid[0].length }, () =>
// // //     Array.from({ length: grid[0].length }, () => 0)
// // //   );

// // //   const lastRow = grid.length - 1;

// // //   for (let j1 = 0; j1 < grid[0].length; j1++) {
// // //     for (let j2 = 0; j2 < grid[0].length; j2++) {
// // //       if (j1 === j2) cache[j1][j2] = grid[lastRow][j1];
// // //       else cache[j1][j2] = grid[lastRow][j1] + grid[lastRow][j2];
// // //     }
// // //   }

// // //   console.log(cache);

// // //   for (let i = lastRow - 1; i >= 0; i--) {
// // //     for (let j1 = 0; j1 < grid[0].length; j1++) {
// // //       for (let j2 = 0; j2 < grid[0].length; j2++) {
// // //         let max = -1e8;
// // //         for (let newJ1 = -1; newJ1 <= 1; newJ1++) {
// // //           for (let newJ2 = -1; newJ2 <= 1; newJ2++) {
// // //             if (j1 === j2) value = grid[i][j1];
// // //             else value = grid[i][j1] + grid[i][j2];

// // //             if (
// // //               j1 + newJ1 < 0 ||
// // //               j1 + newJ1 >= grid[i].length ||
// // //               j2 + newJ2 < 0 ||
// // //               j2 + newJ2 >= grid[i].length
// // //             ) {
// // //               value += -1e8;
// // //             } else {
// // //               // console.log(cache[j1 + newJ1][j2 + newJ2]);

// // //               value += cache[j1 + newJ1][j2 + newJ2];
// // //               // console.log(cache);
// // //             }

// // //             if (value > max) {
// // //               max = value;
// // //             }
// // //           }
// // //         }
// // //         curr[j1][j2] = max;
// // //       }
// // //     }

// // //     for (let k = 0; k < curr.length; k++) {
// // //       for (let l = 0; l < curr[k].length; l++) {
// // //         cache[k][l] = curr[k][l];
// // //       }
// // //     }
// // //   }

// // //   console.log(cache);
// // //   return cache[0][grid[0].length - 1];
// // // };

// // // const collectMaximumFruits = function (grid) {
// // //   const cache = Array.from({ length: grid.length }, () =>
// // //     Array.from({ length: grid[0].length }, () =>
// // //       Array.from({ length: grid[0].length }, () => -1)
// // //     )
// // //   );

// // //   // const maxFruits1 = maxFruitsMemoization(
// // //   //   0,
// // //   //   0,
// // //   //   grid[0].length - 1,
// // //   //   grid,
// // //   //   cache
// // //   // );
// // //   // console.log(cache, cache[0][0][grid[0].length - 1]);

// // //   // const maxFruits = maxFruitsTabulation(grid);
// // //   const maxFruits = maxFruitsSpaceOptimization(grid);
// // //   console.log(maxFruits);

// // //   return maxFruits;
// // // };

// // // collectMaximumFruits([
// // //   [3, 1, 1],
// // //   [2, 5, 1],
// // //   [1, 5, 5],
// // //   [2, 1, 1],
// // // ]);

// // const triangleMemoization = function (i, j, triangle, cache) {
// //   if (i === triangle.length - 1) {
// //     return triangle[i][j];
// //   }

// //   if (cache[i][j] !== -1) {
// //     return cache[i][j];
// //   }

// //   const first = triangle[i][j] + triangleMemoization(i + 1, j, triangle, cache);
// //   const second =
// //     triangle[i][j] + triangleMemoization(i + 1, j + 1, triangle, cache);

// //   return (cache[i][j] = first < second ? first : second);
// // };

// // const triangleTabulation = function (triangle) {
// //   let cache = Array.from(
// //     { length: triangle[triangle.length - 1].length },
// //     () => 0
// //   );

// //   for (let j = 0; j < triangle[triangle.length - 1].length; j++) {
// //     cache[j] = triangle[triangle.length - 1][j];
// //   }

// //   console.log(cache);

// //   for (let i = triangle.length - 2; i >= 0; i--) {
// //     for (let j = 0; j < i + 1; j++) {
// //       const first = triangle[i][j] + cache[j];
// //       const second = triangle[i][j] + cache[j + 1];
// //       cache[j] = first <= second ? first : second;
// //       console.log(cache, 232);
// //     }
// //   }

// //   console.log(cache);
// //   return cache[0];
// // };

// // const triangleMinSum = function (triangle) {
// //   // const cache = Array.from({ length: triangle.length }, (_, i) =>
// //   //   Array.from({ length: i + 1 }, () => -1)
// //   // );

// //   // const sum = triangleMemoization(0, 0, triangle, cache);
// //   // console.log(cache);
// //   // console.log(sum);

// //   const sum = triangleTabulation(triangle);
// //   return sum;
// // };

// // // triangleMinSum([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]);
// // // triangleMinSum([[1], [2, 3], [3, 6, 7], [8, 9, 6, 10]]);

// // // const decodeWithMemo = function (i, s, charMap, cache) {
// // //   if (i < 0) {
// // //     return 1;
// // //   }

// // //   if (cache[i] !== -89) {
// // //     return cache[i];
// // //   }

// // //   let first = -1;
// // //   if (s[i] !== "0") {
// // //     first = decodeWithMemo(i - 1, s, charMap, cache);
// // //   }

// // //   let second = -1;
// // //   if (
// // //     s[i - 1] &&
// // //     s[i - 1] !== "0" &&
// // //     charMap[Number(s.slice(i - 1, i - 1 + 2))]
// // //   ) {
// // //     second = decodeWithMemo(i - 2, s, charMap, cache);
// // //   }
// // //   // console.log(first, second, 121);

// // //   if (first === -1 && second === -1) return 0;

// // //   if (first === -1 && second >= 0) {
// // //     return second;
// // //   }

// // //   if (second === -1 && first >= 0) {
// // //     return first;
// // //   }
// // //   console.log(first, second);

// // //   return first + second;
// // // };

// // // const numDecodings = function (s) {
// // //   // prettier-ignore
// // //   const charMap = ['#', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
// // //   // console.log(charMap[06]);
// // //   const cache = Array.from({ length: s.length }, () => -89);

// // //   const ways = decodeWithMemo(s.length - 1, s, charMap, cache);
// // //   console.log(ways);
// // // };

// // // // numDecodings("111111111111111111111111111111111111111111111");
// // // // numDecodings("12");
// // // // numDecodings("06");
// // // // numDecodings("206");

// // const calcMaxProfit = function (curDay, canBuy, prices) {
// //   if (curDay === prices.length) {
// //     return 0;
// //   }

// //   let profit = 0;

// //   if (canBuy === 1) {
// //     const decidedToBuy = -prices[curDay] + calcMaxProfit(curDay + 1, 0, prices);
// //     const decidedToNotBuy = calcMaxProfit(curDay + 1, 1, prices);
// //     profit = decidedToBuy > decidedToNotBuy ? decidedToBuy : decidedToNotBuy;
// //   } else {
// //     const decideToSell = prices[curDay] + calcMaxProfit(curDay + 1, 1, prices);
// //     const decidedToNotSell = calcMaxProfit(curDay + 1, 0, prices);
// //     profit = decideToSell > decidedToNotSell ? decideToSell : decidedToNotSell;
// //   }

// //   return profit;
// // };

// // const maxProfit = function (prices) {
// //   const profit = calcMaxProfit(0, 1, prices);
// //   console.log(profit);

// //   const cache = Array.from({ length: prices.length + 1 }, () =>
// //     Array.from({ length: 2 }, () => 0)
// //   );
// //   for (let curDay = prices.length - 1; curDay >= 0; curDay--) {
// //     for (let canBuy = 0; canBuy < 2; canBuy++) {
// //       let profit = 0;

// //       if (canBuy === 0) {
// //         const decidedToBuy = -prices[curDay] + cache[curDay + 1][1];
// //         const decidedToNotBuy = cache[curDay + 1][0];
// //         profit =
// //           decidedToBuy > decidedToNotBuy ? decidedToBuy : decidedToNotBuy;
// //       } else {
// //         const decideToSell = prices[curDay] + cache[curDay + 1][0];
// //         const decidedToNotSell = cache[curDay + 1][1];
// //         profit =
// //           decideToSell > decidedToNotSell ? decideToSell : decidedToNotSell;
// //       }
// //       cache[curDay][canBuy] = profit;
// //     }
// //   }

// //   console.log(cache);
// // };

// // maxProfit([7, 1, 5, 3, 6, 4]);

// const coinChangeMemoization = function (index, target, coins, cache) {
//   if (index === 0) {
//     return target % coins[0] === 0 ? 1 : 0;
//   }

//   if (cache[index][target] !== -1) {
//     return cache[index][target];
//   }

//   const notTake = coinChangeMemoization(index - 1, target, coins, cache);
//   let take = 0;
//   if (coins[index] <= target) {
//     take = coinChangeMemoization(index, target - coins[index], coins, cache);
//   }

//   return (cache[index][target] = notTake + take);
// };

// const coinChangeTabulation = function (target, coins) {
//   const cache = Array.from({ length: coins.length }, () =>
//     Array.from({ length: target + 1 }, () => 0)
//   );

//   const prev = Array.from({ length: target + 1 }, () => 0);

//   for (let t = 0; t <= target; t++) {
//     // cache[0][t] = t % coins[0] === 0 ? 1 : 0;
//     prev[t] = t % coins[0] === 0 ? 1 : 0;
//   }

//   for (let index = 1; index < coins.length; index++) {
//     for (let t = 0; t <= target; t++) {
//       const notTake = prev[t];
//       let take = 0;
//       if (coins[index] <= t) {
//         take = prev[t - coins[index]];
//       }
//       prev[t] = notTake + take;
//     }
//   }

//   console.log(prev);
// };

// const coinChange = function (coins, target) {
//   // const cache = Array.from({ length: coins.length }, () =>
//   //   Array.from({ length: target + 1 }, () => -1)
//   // );
//   // const count = coinChangeMemoization(coins.length - 1, target, coins, cache);
//   // console.log(count);
//   const count = coinChangeTabulation(target, coins);
// };

// coinChange([1, 2, 5], 5);

// You are given an array ‘arr’ that contains an equal number of positive and negative elements. Rearrange the given array such that positive and negative numbers are arranged alternatively. Also, the respective relative order of positive and negative should be maintained.
// For example:
// For the given arr[ ] = { -1, 3, 5, 0, -2, -5 }
// arr[ ] = {3, -1, 5, -2, 0, -5 } is valid rearrangement.
// arr[ ] = {3, -1, 0, -2, 5, -5 } is invalid rearrangement; order of 0 and 5 is changed.
// arr[ ] = {3, -1, 5, 0, -2, -5 } is invalid rearrangement; positive and negative elements are not alternative.

// 3, 5, 0
// -1, -2, -5
// const arr = [-1, 3, 5, 0, -2, -5];
const arr = [3, 1, -2, -5, 2, -4];

let j = 0;
for (let i = 1; i < arr.length; i++) {
  if (arr[i] >= 0) {
    let temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
    j++;
  }
}

console.log(arr);

// let j = 2;
// let k = 1;
// let i = 1;
// while (i < arr.length / 2) {
//   let k = 0;
//   while (arr[i] >= 0) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     j = j + 2;
//     k++;
//   }
//   i = k > 0 ? i + k : i + 1;
// }
// console.log(arr);

// i = arr.length / 2;
// j = 1;
// while (i < arr.length - 1) {
//   if (j < arr.length / 2 && arr[i] >= 0) {
//     j += 2;
//     i++;
//     continue;
//   }

//   if (arr[i] >= 0) {
//     i++;
//     continue;
//   }
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
//   j += 2;
//   i++;
// }
// console.log(arr);
