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
      this.#length++;
      return;
    }

    const newNode = this.#createNode(data);
    newNode.next = this.#head;
    this.#head = newNode;
    this.#length++;
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
    this.#length++;
  }

  #insertAtMiddle(data, temp) {
    const newNode = this.#createNode(data);
    newNode.next = temp.next;
    temp.next = newNode;
    this.#length++;
  }

  insert(data, position) {
    if (position === 0) {
      this.insertAtFirst(data);
      return;
    }

    if (position === this.#length) {
      this.insertAtLast(data);
      return;
    }

    let temp = this.#head;
    let start = position - 1;

    while (start--) {
      temp = temp.next;
    }

    this.#insertAtMiddle(data, temp);
  }

  insertBulkAtFirst(arr) {
    for (let el of arr) {
      this.insertAtFirst(el);
    }
  }

  insertBulkAtLast(arr) {
    let temp = this.#head;
    while (temp.next) {
      temp = temp.next;
    }

    for (let el of arr) {
      temp.next = this.#createNode(el);
      temp = temp.next;
      this.#length++;
    }
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
      this.#insertAtMiddle(arr[i], temp);
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

  reverse() {
    let temp = this.#head;
    let prev = null;
    let curr = temp;
    let succ = null;

    while (curr) {
      succ = curr.next;
      curr.next = prev;
      prev = curr;
      curr = succ;
    }
    this.#head = prev;
  }

  getMiddleNode() {
    let slow = this.#head;
    let fast = this.#head;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    console.log(slow);
  }

  rotate(k) {
    let temp = this.#head;
    let count = 0;

    while (temp) {
      count++;
      temp = temp.next;
    }
    console.log(count);
    count = count - k;
    temp = this.#head;
    let prev;

    while (count--) {
      prev = temp;
      temp = temp.next;
    }

    prev.next = null;
    let tail = temp;
    while (tail.next) {
      tail = tail.next;
    }
    tail.next = this.#head;
    this.#head = temp;
  }

  checkPalindrome() {
    let temp = this.#head;

    let count = 0;
    while (temp) {
      temp = temp.next;
      count++;
    }

    count = Math.floor(count / 2);
    temp = this.#head;
    count--;
    while (count--) {
      temp = temp.next;
    }

    let head2 = temp.next;
    temp.next = null;

    let succ = null;
    let prev = null;

    while (head2) {
      succ = head2.next;
      head2.next = prev;
      prev = head2;
      head2 = succ;
    }

    head2 = prev;
    temp = this.#head;

    while (temp) {
      if (head2.data !== temp.data) return "Not a palindrome";

      head2 = head2.next;
      temp = temp.next;
    }

    return "Palindrome";
  }

  removeEveryKthNode(k) {
    let temp = this.#head;
    let prev = null;
    let count = 1;
    while (temp) {
      if (count === k) {
        prev.next = temp.next;
        temp = prev.next;
        count = 1;
      } else {
        prev = temp;
        temp = temp.next;
        count++;
      }
    }
  }
}

const ll = new LinkedList();
ll.insertAtLast(1);
ll.insertAtLast(2);
ll.insertAtLast(3);
ll.insertAtLast(4);
ll.insertAtLast(5);
ll.insertAtLast(6);
ll.insertAtLast(10);
ll.insertAtLast(11);
ll.insertAtLast(18);
ll.insertAtLast(100);
// const arr = [1, 2, 3, 4];
// ll.insertBulk(arr, 4);
// ll.insertBulkAtFirst([666, 333]);
// ll.insertBulkAtLast([133, 188]);
// ll.insert(266, 2);
// // ll.reverse();
// // ll.getMiddleNode();
// ll.displayList();
// ll.rotate(5);
// console.log(ll.checkPalindrome());
ll.displayList();
ll.removeEveryKthNode(3);
ll.displayList();

// you don't need an API if you don't need the data also in other places like a mobile app. so if you have a DB and your Next.js app, you query the DB straight from the server components.
