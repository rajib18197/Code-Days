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
