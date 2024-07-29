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

// *****************

const argsCount = function (number) {
  let count = 0;
  let num = number;
  let sum = 0;
  while (num !== 0) {
    sum = sum + (num % 10);
    num = Math.floor(num / 10);
    // console.log(sum);
    // console.log(num);
    count++;
  }
  console.log(count);
};

argsCount(5684);
argsCount(155689);
argsCount(9867295);

// In computing, a process is the instance of a computer program that is being executed by one or many threads. It contains the program code and its activity. Depending on the operating system (OS), a process may be made up of multiple threads of execution that execute instructions concurrently

// A system is said to be concurrent if it can support two or more actions in progress at the same time. A system is said to be parallel if it can support two or more actions executing simultaneously.
// JavaScript is weird and powerful at the same time.

// It is a JIT programming language.

// It is first compiled then executed.

// But it can be compiled and executed at the same time!

// That is what JIT means: just in time compiled.

// You must set youreslf a correct mental model about this if you want to be good at JS.

// The compilation means that, the JS parser reads the code and saves it in memory. Here we talk about instances.

// Then it executes it when it is called in our program.

// All of this may happen at 2 different times or at the same time.

// It's a harsh mental model to grab.
/* Data used in exercises */
const books = [
  {
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: ["fantasy", "high-fantasy", "adventure"],
    filmAdaptation: true,
  },
  {
    title: "The Cyberiad",
    publicationDate: 1965,
    author: "Stanislaw Lem",
    genres: ["science fiction"],
  },
  {
    title: "Dune",
    publicationDate: 1965,
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    filmAdaptation: true,
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    filmAdaptation: true,
  },
  {
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    filmAdaptation: true,
  },
];

/* ⚠️ YOU WILL CALL THE FUNCTIONS BELOW IN EXERCISES.
     DON'T WORRY IF THEY DON'T MAKE SENSE FOR NOW.
     YOU WILL LEARN EVERYTHING A BIT LATER IN THE COURSE.
     FOR NOW TREAT THEM AS BLACK BOXES (focus on the values they return).
     YOU CAN CALL THEM AND LOG THE RETURNED VALUE TO THE CONSOLE TO SEE WHAT EXACTLY THEY RETURN. */

const getBooksByGenre = (genre) =>
  books.filter((book) => book.genres.includes(genre));
const getBooksAsArrays = () => books.map((book) => Object.entries(book));
const getBookAuthors = () => books.map((book) => book.author);

/*
 *  ********************************************
 *  1) DESTRUCTURING ARRAYS                    *
 *  ********************************************
 */

/* A) Destructure the 'books' array into four variables called 'a', 'b', 'c' and 'd'.
      Leave the rest of the books unused. */

const [a, b, c, d] = books;
// console.log(a, b, c, d);

/* B) The second and third books are science fiction.
      Assign these books to the variables called 'second' and 'third' using destructuring. */

/* C) The getBooksByGenre() function returns an array of books based on the genre you pass as the argument.
      Use it to get all 'fantasy' books. Destructure the returned array into two variables — the first one called 'theLordOfTheRings',
      and the second one called 'otherFantasyBooks' (an array containing all other values from the returned array). */

const [theLordOfTheRings, ...otherFantasyBooks] = getBooksByGenre("fantasy");
// console.log(arr);

/* D) Are you ready for some hard-core destructuring? 😄
      The getBooksAsArrays() function returns the books array, but all book objects and their properties were converted to arrays.
      Now, you have an array of arrays of arrays.
      Destructure the title of the second book (The Cyberiad) into a variable called 'title'. */

// const arr2 = getBooksAsArrays();
// console.log(arr2);
// const [, [[, title]]] = arr2;
// console.log(title);

/* ⚠️ COMMENT OUT YOUR SOLUTIONS AFTER YOU FINISH SO THAT IT DOESN'T COLLIDE WITH NEXT EXERCISES 🠕 */

/*
 *  ********************************************
 *  2) DESTRUCTURING OBJECTS                   *
 *  ********************************************
 */

/* A) Take the first object from the 'books' array, and assign the author to the 'author' variable using destructuring.
 *     Use the 'let' statement because the 'author' variable may change later. */

/* B) Take the second object from the 'books' array, and destructure the title into a variable called 'bookTitle'. */

/* C) The book objects aren't consistent in their form.
      For example, the second book doesn't have the 'filmAdaptation' property.
      Destructure it into a variable called 'hasFilmAdaptation' with a default value of false. */

/* D) Remember the 'author' variable from exercise A? It's time to reassign it.
      Destructure the author of the third book into existing variable called 'author'. */

/* ⚠️ COMMENT OUT YOUR SOLUTIONS AFTER YOU FINISH SO THAT IT DOESN'T COLLIDE WITH NEXT EXERCISES 🠕 */

/*
 *  ********************************************
 *  3) THE SPREAD SYNTAX                       *
 *  ********************************************
 */

/* A) The getBookAuthors() function returns an array of authors from the 'books' array.
      Reassign the 'authors' variable below so that it contains both — already existing authors,
      and authors returned from the getBookAuthors() function. Use the spread syntax. */
let authors = ["George Orwell", "Aldous Huxley"];

/* B) The console.log() method can take multiple arguments and log them to the console.
      First, log the 'authors' array as it is (as one argument).
      Second, log the elements of the 'authors' array, but this time use the spread syntax.
      Compare the outputs. */

/* C) The spread syntax can be used with other iterables, for example, strings.
      Create a new variable called 'firstNameArray', and spread the 'firstName' string
      so that each letter becomes an element of the 'firstNameArray' like ['J', 'o', 'h', 'n']. */
const firstName = "John";

/* D) Now it's time to spread some objects. Create a new variable called 'cyberiad',
      and assign an object to it. This object should have all the properties of the second book from the 'books' array,
      plus the missing 'filmAdaptation' property set to false. */

/* ⚠️ COMMENT OUT YOUR SOLUTIONS AFTER YOU FINISH SO THAT IT DOESN'T COLLIDE WITH NEXT EXERCISES 🠕 */
const question = new Map([
  ["name", "What is your favourite programming language?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct Answer."],
  [false, "Try Again!"],
]);

console.log(question.set("favLine", "Be OBSESSED with LEARNING"));

console.log(question.get("name"));
for (const [key, value] of question) {
  if (typeof key === "number") {
    console.log(`Answer ${key}: ${value}`);
  }
}

const answer = 3;

console.log(question.get(question.get("correct") === answer));
console.log([...question]);

const obj = {
  age: 23,
};

const r = new Map(Object.entries(obj));
console.log(r);

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
