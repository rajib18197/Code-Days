// const luxuryCars = "abc";

// // 1
// const subset2 = function (arr, choiceBox, ans) {
//   if (arr.length === 0) {
//     ans.push([choiceBox]);
//     return;
//   }

//   subset2(arr.slice(1), choiceBox + arr[0], ans);
//   subset2(arr.slice(1), choiceBox, ans);
// };

// // const ans = [];
// // subset2(luxuryCars, "", ans);
// // console.log(ans);

// // 2
// const subset3 = function (arr, choiceBox, ans) {
//   if (arr.length === 0) {
//     console.log(choiceBox);
//     ans.push([...choiceBox]);
//     return;
//   }

//   choiceBox.push(arr[0]);
//   subset3(arr.slice(1), choiceBox, ans);
//   choiceBox.pop(arr[0]);
//   subset3(arr.slice(1), choiceBox, ans);
// };

// // const ans2 = [];
// // subset3([1, 2, 3], [], ans2);
// // console.log(ans2);

// // 3
// const subset = function (arr, choiceBox) {
//   if (arr.length === 0) {
//     console.log(choiceBox);
//     return [choiceBox];
//   }

//   const accepted = subset(arr.slice(1), choiceBox + arr[0]);
//   const rejected = subset(arr.slice(1), choiceBox);
//   //   Not Possible cause - 1st return [[1,2]], 2nd - [[[1, 2]]], every return new arr will be added which is invalid, Only Possible if base case returns 2d array.
//   //   const arr2 = [];
//   //   arr2.push(accepted);
//   //   arr2.push(rejected);
//   return [].concat(accepted, rejected);
// };

// // const mixedVersions = subset(luxuryCars, "");
// // console.log(mixedVersions);

// // 4
// const subset4 = function (arr, choiceBox) {
//   if (arr.length === 0) {
//     const newArr = [];
//     console.log(choiceBox, 111);
//     newArr.push([...choiceBox]);
//     return newArr;
//   }

//   choiceBox.push(arr[0]);
//   const accepted = subset4(arr.slice(1), choiceBox);
//   choiceBox.pop();
//   const rejected = subset4(arr.slice(1), choiceBox);

//   const arr2 = [];
//   arr2.push(...accepted);
//   arr2.push(...rejected);
//   //   return [].concat(accepted, rejected);
//   return arr2;
// };

// const mixed = subset4([1, 2, 3], []);
// console.log(mixed);

class Tree {
  constructor(data, left, right) {
    this.data = data;
    this.left = left || null;
    this.right = right || null;
  }
}

// const arr = [1, 2, 4, 5, -1, -1, -1, -1, 3, 10, -1, -1, -1];
const arr = [1, 2, 4, -1, -1, 5, -1, -1, 3, 6, -1, -1, -1];

let index = 0;
const createTree = function (arr) {
  if (arr[index] === -1) {
    index += 1;
    return null;
  }

  const node = new Tree(arr[index]);
  index += 1;

  node.left = createTree(arr);
  node.right = createTree(arr);

  return node;
};

const preOrderTraversal = function (root) {
  if (root === null) {
    return;
  }

  console.log(`${root.data} `);

  if (root.left) {
    console.log(`left child of ${root.data}: `);
  }

  preOrderTraversal(root.left);

  if (root.right) {
    console.log(`right child of ${root.data}: `);
  }

  preOrderTraversal(root.right);
};

preOrderTraversal(tree);

class Tree {
  constructor(data, left, right) {
    this.data = data;
    this.left = left || null;
    this.right = right || null;
  }
}

const arr = [1, 2, 4, 5, -1, -1, -1, -1, 3, 10, -1, -1, -1];
// const arr = [1, 2, 3, 4, 7, -1, -1, -1, -1, -1, -1];

// // // // prettier-ignore
// // // const arr = ['Books', 'Author1', 'SelfHelp', 'Deep Work', -1, -1, 'Atomic Habits', -1, -1, 'StoryTeller', 'Big Magic', -1, -1, 'Contagious', -1, -1, 'Author2', 'SelfHelp', 'The One Thing', -1, -1, 'Flow', -1, -1, 'StoryTeller', 'Made to Stick', -1, -1, 'Influence', -1, -1];

const createTree = function (arr) {
  if (arr[0] === -1) {
    arr.shift();
    return null;
  }
  const front = arr[0];
  arr.shift();
  const node = new Tree(front);
  node.left = createTree(arr);
  node.right = createTree(arr);

  return node;
};
// // //        books
// // //   author1
// // // self
// // // deep

const tree = createTree(arr);

const preOrderTraversal = function (root) {
  if (root === null) {
    return;
  }

  console.log(`${root.data} `);

  if (root.left) {
    console.log(`left child of ${root.data}: `);
  }

  preOrderTraversal(root.left);

  if (root.right) {
    console.log(`right child of ${root.data}: `);
  }

  preOrderTraversal(root.right);
};

preOrderTraversal(tree);
// // // size = 3
// // // [1, 2] 0 2

// // class Queue {
// //   #arr;
// //   #size;
// //   front = 0;
// //   back = 0;

// //   constructor(size) {
// //     this.#size = size;
// //     this.#arr = new Array({ length: size });
// //   }

// //   push(data) {
// //     if (this.back === 0) {
// //       this.#arr[this.front] = data;
// //       this.back++;
// //     } else {
// //       this.#arr[this.back] = data;
// //       this.back++;
// //     }
// //   }

// //   pop() {
// //     const top = arr[this.front];
// //     this.front++;
// //     return top;
// //   }
// // }

// // // function CircularQueue(){
// // //   // this = {}
// // //   this.arr = [];
// // //   // this.push = function(){

// // //   // }
// // // }

// // // CircularQueue.prototype.push = function(){

// // // }

// // // const c = new CircularQueue();
// // // const c1 = new CircularQueue();

// // class QueueUsingStack {
// //   stack1 = [];
// //   stack2 = []; // 3 2 1

// //   push(data) {
// //     this.stack1[this.stack1.length] = data; // 1, 2, 3
// //   }

// //   isStack1Empty() {
// //     return this.stack1.length === 0;
// //   }

// //   isStack2Empty() {
// //     return this.stack2.length === 0;
// //   }

// //   ownPop() {
// //     while (!this.isStack1Empty()) {
// //       this.stack2.push(this.stack1.pop()); // 1 2 3 // 3 2 1
// //     }

// //     const removeElement = this.stack2.pop();

// //     while (!this.isStack2Empty()) {
// //       this.stack1[this.stack1.length] = this.stack2.pop();
// //     }

// //     console.log(this.stack1, removeElement);
// //     return removeElement;
// //   }
// // }
// // const queue = new QueueUsingStack();
// // queue.push(1);
// // queue.push(2);
// // queue.push(3);

// // queue.ownPop();
// // class CircularQueue {
// //   arr;
// //   #size;
// //   front = -1;
// //   back = 0;

// //   // 0 1 2 3 4 --- 5

// //   constructor(size) {
// //     null;
// //     this.#size = size;
// //     new Object();
// //     this.arr = []; // new Array();
// //   }
// //   push(data) {
// //     if ((this.back + 1) % this.#size === this.front) {
// //       return "Array is full.";
// //     }

// //     if (this.front === -1) {
// //       this.front++;
// //       this.arr[this.front] = data;
// //     } else {
// //       this.back = (this.back + 1) % this.#size;
// //       this.arr[this.back] = data;
// //     }
// //   }

// //   pop() {
// //     const top = this.arr[this.front];
// //     this.front = (this.front + 1) % this.#size;
// //     return top;
// //   }
// // }

// // const arr = new CircularQueue(5);

// const arr = [10, 2, 3, 6, 5, 2, 6, 12, 4]; // next greater element from right

// const nextGreaterElement = (arr) => {
//   const ans = Array.from({ length: arr.length }, () => -1);

//   const stack = [];
//   stack.push(0);

//   for (let i = 1; i < arr.length; i++) {
//     let topElement = stack[stack.length - 1];

//     while (stack.length && arr[i] > arr[topElement]) {
//       ans[topElement] = arr[i];
//       stack.pop();
//       topElement = stack[stack.length - 1];
//     }

//     stack.push(i);
//   }

//   console.log(ans);
// };

// // nextGreaterElement(arr);

// class Node {
//   constructor(data, left, right) {
//     this.data = data;
//     this.left = left || null;
//     this.right = right || null;
//   }
// }

// const data1 = [1, 2, 4, -1, -1, 5, -1, -1, 3, -1, 6, -1, 7, -1, -1];
// const data2 = [1, 2, 4, -1, -1, 5, -1, -1, 3, -1, 6, -1, 7, -1, -1];

// const binaryTree = function (data) {
//   if (data[0] === -1) {
//     data.shift();
//     return null;
//   }

//   const front = data[0];
//   data.shift();

//   const node = new Node(front);
//   node.left = binaryTree(data);
//   node.right = binaryTree(data);
//   return node;
// };

// const tree1 = binaryTree(data1);
// const tree2 = binaryTree(data2);
// //       1
// //   2       3
// // 4   5       6
// //               7
// const isIdentical = function (root1, root2) {
//   if (!root1 && !root2) return true;

//   if (root1.data === null && root2.data) {
//     return false;
//   }

//   if (root1.data && root2.data === null) {
//     return false;
//   }

//   return (
//     isIdentical(root1.left, root2.left) && isIdentical(root1.right, root2.right)
//   );
// };

// const identical = isIdentical(tree1, tree2);
// console.log(identical, 11);

// const preOrderTraversal = function (root) {
//   if (!root) return;

//   console.log(root.data);

//   if (root.left) {
//     console.log(`left child of ${root.data}: `);
//     preOrderTraversal(root.left);
//   }

//   if (root.right) {
//     console.log(`right child of ${root.data}: `);
//     preOrderTraversal(root.right);
//   }
// };

// // preOrderTraversal(tree1);

// var buildArray = function (target, n) {
//   const stack = [];
//   const temp1 = [];
//   const temp2 = [];
//   const str = [];
//   for (let i = 1; i <= n; i++) {
//     if (stack.length === target.length) {
//       while (target.length) {
//         console.log(target, 11111);
//         const el1 = target.pop();
//         const el2 = stack.pop();
//         temp1.push(el1);
//         temp2.push(el2);
//       }
//       // console.log(temp1);
//       let done = true;
//       while (temp1.length) {
//         // console.log(temp1);
//         const el1 = temp1.pop();
//         const el2 = temp2.pop();
//         if (el1 !== el2) {
//           done = false;
//           target.push(el1);
//           str.push("Pop");
//         } else {
//           target.push(el1);
//           stack.push(el2);
//         }
//       }

//       if (done) return str;
//     }

//     stack.push(i);
//     str.push("Push");
//   }

//   return str;
// };

var buildArray = function (target, n) {
  // [1, 3], 3
  const stack = [];

  const temp1 = [];
  const temp2 = [];

  const str = [];

  for (let i = 1; i <= n; i++) {
    stack.push(i);
    str.push("Push");

    while (target.length) {
      const el1 = target.pop();
      if (stack.length) {
        const el2 = stack.pop();
        temp2.push(el2);
      }
      temp1.push(el1);
    }

    let done = true;

    while (temp1.length) {
      const el1 = temp1.pop();
      const el2 = temp2.pop();

      if (el2 && el1 !== el2) {
        target.push(el1);
        done = false;
        str.push("Pop");
      } else {
        target.push(el1);
        if (el2) stack.push(el2);
      }
    }

    if (stack.length === target.length && done) {
      return str;
    }
  }

  return str;
};

// const newArr = buildArray([1, 2, 3], 3);
// console.log(newArr);

const flat = function (nestedArr, arr, index) {
  if (index === nestedArr.length) {
    return;
  }
  if (typeof nestedArr[index] === "object") {
    flat(nestedArr[index], arr, 0);
    // console.log(arr, 1111);
    flat(nestedArr, arr, index + 1);
  } else {
    arr.push(nestedArr[index]);
    flat(nestedArr, arr, index + 1);
  }
};

// const flattenArr = [];
// flat([[1, 2], 7, 8], flattenArr, 0);
// console.log(flattenArr);

// 1 Level deep
// const flattenArr2 = [];
// flat([[1, 2, 3], [4, 5, 6], 7, 8], flattenArr2, 0);
// console.log(flattenArr2);

// 2 Level deep (Also works for multiple levels)
// const flattenArr3 = [];
// flat([[[1, 2], 3], [4, [5, 6]], 7, 8], flattenArr3, 0);
// console.log(flattenArr3);

// const stockSpan = function (arr) {
//   const ans = [];
//   const stack = [];
//   stack.push(arr.length - 1);

//   for (let i = arr.length - 2; i >= 0; i--) {
//     while (arr[i] > arr[stack[stack.length - 1]]) {
//       const diff = stack[stack.length - 1] - i;
//       ans[stack[stack.length - 1]] = diff;
//       stack.pop();
//     }

//     stack.push(i);
//   }

//   while (stack.length) {
//     const diff = stack[stack.length - 1] + 1;
//     ans[stack[stack.length - 1]] = diff;
//     stack.pop();
//   }

//   console.log(ans);
// };

// stockSpan([4, 2, 3, 3, 7]);
// stockSpan([10, 2, 17, 3, 66]);
const rectangle = function (heights) {
  const stack = [];
  let ans = 0;
  let count = 1;

  for (let i = heights.length - 1; i >= heights.length; i--) {
    while (!stack.length) {
      if (heights[i] < heights[stack[stack.length - 1]]) {
        count += stack[stack.length - 1] - i;
      } else {
        // ans = Math.max(ans, heights[i] * count);
      }

      stack.pop();
    }

    stack.push(i);

    ans = Math.max(ans, heights[i] * count);
  }
  console.log(ans);
};

// rectangle([2, 1, 5, 6, 2, 3]);
let max = 0;
const diameter = function (root) {
  if (root === null) {
    return 0;
  }

  const lh = calcHeight(root.left);
  const rh = calcHeight(root.right);

  max = Math.max(max, lh + rh);
  diameter(root.left);
  diameter(root.right);
};

function calcHeight(root) {
  if (root === null) {
    return 0;
  }

  return 1 + Math.max(calcHeight(root.left), calcHeight(root.right));
}

diameter(tree);
console.log(max);
[
  33, 27, 12, 2, 3, 29, 25, -1, 16, 50, -1, -1, 47, -1, -1, -1, -1, -1, -1, 31,
  6, -1, 42, 1, 36, -1, -1, 7, -1, 22, 41, -1, 4, 48, 32, -1, -1, 14, 21, -1,
  39, 8, -1, -1, -1, -1, -1, -1, -1, -1, -1,
];
