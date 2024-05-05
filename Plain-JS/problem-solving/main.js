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

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next || null;
  }
}

class LinkedList {
  #head = null;
  #length = 0;

  #createNode(data) {
    const node = new Node(data);
    return node;
  }

  insertAtFirst(data) {
    if (!this.#head) {
      this.#head = this.#createNode(data);
      return;
    }

    const newNode = this.#createNode(data);
    newNode.next = this.#head;
    this.#head = newNode;
  }

  insertAtLast(data) {
    if (!this.#head) {
      this.insertAtFirst(data);
      return;
    }

    let temp = this.#head;
    while (temp.next) {
      temp = temp.next;
    }

    const newNode = this.#createNode(data);
    temp.next = newNode;
  }

  insertBulk(arr, startPosition) {
    let temp = this.#head;
    if (!temp) {
      this.insertAtFirst(arr[i]);
      temp = this.#head;
    }

    let start = startPosition && startPosition - 1;

    while (start--) {
      temp = temp.next;
    }

    for (let i = 0; i < arr.length; i++) {
      const newNode = this.#createNode(arr[i]);
      newNode.next = temp.next;
      temp.next = newNode;
      temp = temp.next;
    }
  }

  displayList() {
    let temp = this.#head;
    let result = "";

    while (temp) {
      result = result + temp.data + " -> ";
      temp = temp.next;
    }

    console.log(result + "null");
  }
}

const ll = new LinkedList();
ll.insertAtFirst(22);
ll.insertAtFirst(32);
ll.insertAtFirst(42);
ll.insertAtLast(12);
ll.insertAtLast(100);
const arr = [1, 2, 3, 4];
ll.insertBulk(arr, 4);
ll.displayList();
