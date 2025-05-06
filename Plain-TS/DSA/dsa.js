// // // // // class DisjointSet {
// // // // //   private parent: number[];
// // // // //   private rank: number[];
// // // // //   private size: number[];
// // // // //   constructor(length: number) {
// // // // //     this.parent = Array.from({ length: length }, (_, i) => i);
// // // // //     this.rank = Array.from({ length: length }, () => 1);
// // // // //     this.size = Array.from({ length: length }, () => 1);
// // // // //   }
// // // // //   findUltimateParent(u: number): number {
// // // // //     if (this.parent[u] === u) {
// // // // //       return u;
// // // // //     }
// // // // //     return (this.parent[u] = this.findUltimateParent(this.parent[u]));
// // // // //   }
// // // // //   unionByRank(u: number, v: number): boolean {
// // // // //     const ult_u: number = this.findUltimateParent(u);
// // // // //     const ult_v: number = this.findUltimateParent(v);
// // // // //     if (ult_u === ult_v) {
// // // // //       return false;
// // // // //     }
// // // // //     if (this.rank[ult_u] === this.rank[ult_v]) {
// // // // //       this.parent[ult_u] = ult_v;
// // // // //       this.rank[ult_v]++;
// // // // //       return true;
// // // // //     }
// // // // //     if (this.rank[ult_u] < this.rank[ult_v]) {
// // // // //       this.parent[ult_u] = ult_v;
// // // // //       return true;
// // // // //     }
// // // // //     if (this.rank[ult_u] > this.rank[ult_v]) {
// // // // //       this.parent[ult_v] = ult_u;
// // // // //       return true;
// // // // //     }
// // // // //     return false;
// // // // //   }
// // // // //   unionBySize(u: number, v: number): boolean {
// // // // //     const ult_u: number = this.findUltimateParent(u);
// // // // //     const ult_v: number = this.findUltimateParent(v);
// // // // //     if (ult_u === ult_v) {
// // // // //       return false;
// // // // //     }
// // // // //     if (this.size[ult_u] === this.size[ult_v]) {
// // // // //       this.parent[ult_u] = ult_v;
// // // // //       this.size[ult_v] += this.size[ult_u];
// // // // //       return true;
// // // // //     }
// // // // //     if (this.size[ult_u] < this.size[ult_v]) {
// // // // //       this.parent[ult_u] = ult_v;
// // // // //       this.size[ult_v] += this.size[ult_u];
// // // // //       return true;
// // // // //     }
// // // // //     if (this.size[ult_u] > this.size[ult_v]) {
// // // // //       this.parent[ult_v] = ult_u;
// // // // //       this.size[ult_u] += this.size[ult_v];
// // // // //       return true;
// // // // //     }
// // // // //     return false;
// // // // //   }
// // // // // }
// // // // // const ds: DisjointSet = new DisjointSet(3);
// // // // // ds.unionByRank(1, 2);
// // // // // // const arr: Array<(number, number)> = [1, 2];
// // // // // let arr: [number, number];
// // // // // arr = [1, 2];
// // // // // for (let i = 1; i <= 10; i++) {
// // // // //   let modified_i = i % 5;
// // // // //   let result = "";
// // // // //   if (i <= 5) {
// // // // //     if (i !== 1) {
// // // // //       for (let k = 1; k < i; k++) {
// // // // //         result = result + " ";
// // // // //       }
// // // // //     }
// // // // //     for (let j = modified_i || 5; j <= 5; j++) {
// // // // //       result = result + j + " ";
// // // // //     }
// // // // //   } else {
// // // // //     if (i !== 10) {
// // // // //       for (let k = 10; k > i; k--) {
// // // // //         result = result + " ";
// // // // //       }
// // // // //     }
// // // // //     let total = modified_i || 5;
// // // // //     for (let j = 1; j <= total; j++) {
// // // // //       result = result + j + " ";
// // // // //     }
// // // // //   }
// // // // //   console.log(result);
// // // // // }
// // // // // class NodeBST<T> {
// // // // //   constructor(
// // // // //     public data: T,
// // // // //     public left: NodeBST<T> | null = null,
// // // // //     public right: NodeBST<T> | null = null
// // // // //   ) {}
// // // // // }
// // // // // const preorderBST = function (arr: number[]) {
// // // // //   const stack1: [number, NodeBST<number> | null, string][] = [];
// // // // //   const stack2: [number, NodeBST<number> | null, string][] = [];
// // // // //   stack1.push([Number.MIN_VALUE, null, ""]);
// // // // //   stack2.push([Number.MAX_VALUE, null, ""]);
// // // // //   let index = 0;
// // // // //   let root = null;
// // // // //   while (index !== arr.length && stack1.length !== 0 && stack2.length !== 0) {
// // // // //     if (arr[index] < stack1[stack1.length - 1][0]) {
// // // // //       return null;
// // // // //     }
// // // // //     while (arr[index] > stack2[stack2.length - 1][0]) {
// // // // //       stack1.pop();
// // // // //       stack2.pop();
// // // // //     }
// // // // //     const lower = stack1.pop();
// // // // //     const upper = stack2.pop();
// // // // //     if (!lower && !upper) {
// // // // //       continue;
// // // // //     }
// // // // //     let newNode = null;
// // // // //     if (lower[0] === Number.MIN_VALUE && upper[0] === Number.MAX_VALUE) {
// // // // //       root = new NodeBST(arr[index]);
// // // // //       newNode = root;
// // // // //     } else {
// // // // //       if (lower[1] !== null) {
// // // // //         const node = lower[1];
// // // // //         // console.log(node, 21);
// // // // //         node[lower[2]] = new NodeBST(arr[index]);
// // // // //         newNode = node[lower[2]];
// // // // //       } else {
// // // // //         const node = upper[1];
// // // // //         // console.log(node, 22);
// // // // //         node[upper[2]] = new NodeBST(arr[index]);
// // // // //         newNode = node[upper[2]];
// // // // //       }
// // // // //     }
// // // // //     stack1.push([arr[index], newNode, "right"]);
// // // // //     stack2.push([upper[0], null, ""]);
// // // // //     stack1.push([lower[0], null, ""]);
// // // // //     stack2.push([arr[index], newNode, "left"]);
// // // // //     index++;
// // // // //   }
// // // // //   return root;
// // // // // };
// // // // // const arr = [10, 5, 1, 7, 40, 50];
// // // // // console.log(preorderBST(arr));
// // // // // const months = [10, 1, 2, 3, 4, 5, 6, 7, 8, 100];
// // // // // const months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
// // // // const months = [
// // // //   73, 8, 55, 26, 97, 48, 37, 47, 35, 55, 5, 17, 62, 2, 60, 23, 99, 73, 34, 75,
// // // //   7, 46, 82, 84, 29, 41, 32, 31, 52, 32,
// // // // ];
// // // // let count = 0;
// // // // for (let i = 1; i <= months.length; i++) {
// // // //   let k = i;
// // // //   let final = i % 10;
// // // //   let isSame = true;
// // // //   while (k > 0) {
// // // //     let rem = k % 10;
// // // //     k = Math.floor(k / 10);
// // // //     if (final === rem) {
// // // //       final = rem;
// // // //       continue;
// // // //     } else {
// // // //       isSame = false;
// // // //       break;
// // // //     }
// // // //   }
// // // //   if (isSame === false) continue;
// // // //   for (let j = 1; j <= months[i - 1]; j++) {
// // // //     let k = j;
// // // //     let final1 = j % 10;
// // // //     let isSame = true;
// // // //     while (k > 0) {
// // // //       let rem = k % 10;
// // // //       k = Math.floor(k / 10);
// // // //       if (final1 === rem) {
// // // //         final1 = rem;
// // // //         continue;
// // // //       } else {
// // // //         isSame = false;
// // // //         break;
// // // //       }
// // // //     }
// // // //     if (isSame === false) continue;
// // // //     if (final === final1) {
// // // //       console.log(i, j);
// // // //       count++;
// // // //     }
// // // //   }
// // // // }
// // // // console.log(count);
// // // const transformToArrFromStr = function (str: string) {
// // //   return str.split(" ").map((s) => Number(s));
// // // };
// // // const arr = transformToArrFromStr(`9 9 9 9 9 9 9 9 9`);
// // // // const arr = transformToArrFromStr(`2 2 1 2`);
// // // // const arr = transformToArrFromStr(`0 1 2`);
// // // // const arr = transformToArrFromStr(`4 3 2 3 4`);
// // // let min = 0;
// // // for (let i = 1; i < arr.length; i++) {
// // //   if (arr[i] < arr[min]) {
// // //     min = i;
// // //   }
// // // }
// // // arr[min] = arr[min] + 1;
// // // let product = 1;
// // // for (let i = 0; i < arr.length; i++) {
// // //   product = product * arr[i];
// // // }
// // // console.log(product);
// // // var getProps = function (obj, key) {
// // //     var value = obj[key];
// // //     console.log(value);
// // //     return value;
// // // };
// // // getProps([1, 2], "at");

// // class HashSet {
// //   constructor() {
// //     this.data = new HashTable();
// //     this.count = 0;
// //   }

// //   add(value) {
// //     if (this.has(value)) return;
// //     this.data.set(value, true);
// //     this.count++;
// //   }

// //   get(value) {
// //     return this.data.get(value);
// //   }

// //   delete(value) {
// //     if (!this.has(value)) return;
// //     this.data.delete(value);
// //     this.count--;
// //   }

// //   size() {
// //     return this.count;
// //   }

// //   has(value) {
// //     return !!this.data.get(value);
// //   }

// //   values() {
// //     return this.data.keys();
// //   }
// // }

// // const set = new HashSet();
// // set.add("2");
// // console.log(set.get("2"));
// // console.log(set.values());

// class Node {
//   ttl = 5000;

//   constructor(key, value, next = null) {
//     this.key = key;
//     this.value = value;
//     this.next = next;
//   }

//   resetTimer() {
//     this.ttl = 5000;
//     clearTimeout(this.timer);
//   }

//   onTimeExpired(cb) {
//     this.timer = setTimeout(cb, 5000);
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//   }

//   insert(key, value) {
//     const newNode = new Node(key, value);

//     if (this.head === null) {
//       this.head = newNode;
//       return true;
//     }

//     const existingNode = this.#findNode(key);

//     if (existingNode !== null) {
//       existingNode.value = value;
//       existingNode.resetTimer();
//       newNode.onTimeExpired(() => {
//         this.deleteNode(key);
//       });

//       return true;
//     }

//     newNode.next = this.head;
//     this.head = newNode;

//     newNode.onTimeExpired(() => {
//       this.deleteNode(key);
//     });

//     return true;
//   }

//   deleteNode(key) {
//     let temp = this.head;
//     while (temp.next && temp.next.key !== key) {
//       temp = temp.next;
//     }
//     if (temp.next === null) {
//       return null;
//     }

//     temp.next = temp.next.next;
//   }

//   #findNode(key) {
//     if (this.head === null) {
//       return null;
//     }

//     let temp = this.head;

//     while (temp) {
//       if (temp.key === key) return temp;
//       temp = temp.next;
//     }

//     return null;
//   }

//   find(key) {
//     const node = this.#findNode(key);
//     return node ? node.value : null;
//   }

//   *entries() {
//     let temp = this.head;

//     while (temp) {
//       yield [temp.key, temp.value];
//       temp = temp.next;
//     }
//   }
// }

// class HashTable {
//   #keys;
//   constructor(size = 3) {
//     this.size = size;
//     this.table = Array.from({ length: size }, () => null);
//     // this.#keys = new Set();
//     this.#keys = [];
//     this.count = 0;
//     this.isResizing = false;
//     this.ttl = 5000;
//   }

//   #hash(key, size = this.size) {
//     let primeNumber = 5381;

//     for (let char of key) {
//       primeNumber = (primeNumber * 33) ^ char.charCodeAt();
//     }

//     return Math.abs(primeNumber) % size;
//   }

//   #resize(newSize = this.size * 2) {
//     const oldTable = this.table;
//     this.size = newSize;
//     this.count = 0;
//     this.table = Array.from({ length: newSize }, () => null);
//     // this.#keys = [];
//     this.isResizing = true;

//     for (let bucket of oldTable) {
//       if (bucket !== null) {
//         for (let [key, value] of bucket.entries()) {
//           this.set(key, value);
//         }
//       }
//     }

//     this.isResizing = false;
//   }

//   set(key, value) {
//     if (this.count / this.size > 0.75) {
//       this.#resize(this.size * 2);
//     }

//     const index = this.#hash(key);

//     if (this.table[index] === null) {
//       this.table[index] = new LinkedList();
//     }

//     const bucket = this.table[index];

//     const isKeyExist = bucket.find(key);

//     if (isKeyExist === null) {
//       this.count++;
//       if (this.isResizing === false) {
//         this.#keys.push(key);
//       }
//     }

//     bucket.insert(key, value);
//   }

//   get(key) {
//     const index = this.#hash(key);
//     const bucket = this.table[index];

//     if (bucket === null) return null;
//     return bucket.find(key);
//   }

//   keys() {
//     return [...this.#keys];
//   }

//   values() {
//     const allValues = [];

//     for (let bucket of this.table) {
//       if (bucket !== null) {
//         for (let [_key, value] of bucket.entries()) {
//           allValues.push(value);
//         }
//       }
//     }

//     return allValues;
//   }

//   entries() {
//     const allEntries = [];

//     for (let bucket of this.table) {
//       if (bucket !== null) {
//         for (let entry of bucket.entries()) {
//           allEntries.push(entry);
//         }
//       }
//     }

//     return allEntries;
//   }
// }

// const hashTable = new HashTable();

// hashTable.set("firstName", "Mesut");
// hashTable.set("lastName", "Ozil");
// hashTable.set("age", 36);
// hashTable.set("isPlaying", true);
// hashTable.set("isMidfielder", true);

// console.log(hashTable.keys());
// console.log(hashTable.values());
// console.log(hashTable.entries());
// console.log(hashTable.table);

// const arr = [13, 5, 10, 14, 8, 15, 13];
// const maxElement = [13];

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] < maxElement[i - 1]) {
//     maxElement[i] = maxElement[i - 1];
//   } else {
//     maxElement[i] = arr[i];
//   }
// }

// let k = 1;
// const ans = [];
// let sum = 0;

// for (let i = arr.length - 1; i >= 0; i--) {
//   if (k == 1) {
//     ans.push(maxElement[maxElement.length - 1]);
//     k++;
//   } else {
//     sum += arr[i + 1];
//     const tempSum = maxElement[maxElement.length - k] + sum;
//     ans.push(tempSum);
//     k++;
//   }
// }

// console.log(maxElement);
// console.log(ans);

// Alice and Bob are playing a game. They have n
//  cards numbered from 1
//  to n
// . At the beginning of the game, some of these cards are given to Alice, and the rest are given to Bob.

// Card with number i
//  beats card with number j
//  if and only if i>j
// , with one exception: card 1
//  beats card n
// .

// The game continues as long as each player has at least one card. During each turn, the following occurs:

// Alice chooses one of her cards and places it face up on the table;
// Bob, seeing Alice's card, chooses one of his cards and places it face up on the table;
// if Alice's card beats Bob's card, both cards are taken by Alice. Otherwise, both cards are taken by Bob.
// A player can use a card that they have taken during one of the previous turns.

// The player who has no cards at the beginning of a turn loses. Determine who will win if both players play optimally.

// Input
// The first line contains a single integer t
//  (1≤t≤5000
// ) — the number of test cases.

// Each test case consists of two lines:

// the first line contains a single integer n
//  (2≤n≤50
// ) — the number of cards;
// the second line contains n
//  characters, each either A or B. If the i
// -th character is A, then card number i
//  is initially given to Alice; otherwise, it is given to Bob.
// Additional constraint on the input: in each test case, at least one card is initially given to Alice, and at least one card is initially given to Bob.

// Output
// For each test case, output Alice if Alice wins with optimal play, or Bob if Bob wins. It can be shown that if both players play optimally, the game will definitely end in a finite number of turns with one of the players winning.

// Example
// InputCopy
// 8
// 2
// AB
// 2
// BA
// 4
// ABAB
// 4
// BABA
// 3
// BAA
// 5
// AAAAB
// 5
// BAAAB
// 6
// BBBAAA
// OutputCopy
// Alice
// Bob
// Bob
// Bob
// Alice
// Alice
// Bob
// Alice
// Note
// In the first test case, Alice has only one card, and Bob has only one card. Since Alice's card beats Bob's card, she wins after the first turn.

// In the second test case, Alice has only one card, and Bob has only one card. Since Bob's card beats Alice's card, he wins after the first turn.

// In the third test case, there are two possible game scenarios:

// if Alice plays the card 1
//  on the first turn, Bob can respond with the card 2
//  and take both cards. Then, Alice has to play the card 3
//  on the second turn, and Bob will respond by playing the card 4
// . Then, he wins;
// if Alice plays the card 3
//  on the first turn, Bob can respond with the card 4
//  and take both cards. Then, Alice has to play the card 1
// , and Bob can respond either with the card 2
//  or the card 3
// . Then, he wins.
// In the fourth test case, there are two possible game scenarios:

// if Alice plays the card 2
//  on the first turn, Bob can respond with the card 3
//  and take both cards. Then, Alice has to play the card 4
//  on the second turn, and Bob will respond by playing the card 1
// . Then, he wins;
// if Alice plays the card 4
//  on the first turn, Bob can respond with the card 1
//  and take both cards. Then, Alice has to play the card 2
// , and Bob can respond either with the card 3
//  or the card 4
// . Then, he wins.

class PriorityQueue {
  constructor(totalLength, comparator) {
    this.arr = Array.from({ length: totalLength }, () => []);
    this.totalLength = totalLength;
    this.comparator = comparator;
    this.curr = 0;
  }

  top() {
    if (this.curr === 0) return undefined;
    return this.arr[0];
  }

  push(value) {
    if (this.curr === this.totalLength) {
      return;
    }

    this.arr[this.curr] = Array.isArray(value) ? [...value] : value;
    let index = this.curr;
    this.curr++;

    let child = index;
    let parent = Math.floor((child - 1) / 2);

    // this.arr[parent][0] > this.arr[child][0]
    while (parent >= 0 && this.comparator(this.arr, parent, child)) {
      let temp = this.arr[child];
      this.arr[child] = this.arr[parent];
      this.arr[parent] = temp;

      child = parent;
      parent = Math.floor((child - 1) / 2);
    }
  }

  remove() {
    if (this.curr === 0) {
      return -1;
    }

    const removedValue = this.arr[0];

    this.arr[0] = this.arr[this.curr - 1];
    this.curr--;

    if (this.curr === 0) {
      return removedValue;
    }

    let index = 0;
    let smallest = index;
    let left = smallest * 2 + 1;
    let right = smallest * 2 + 2;

    //   (left < this.curr && this.arr[smallest][0] > this.arr[left][0]) ||
    //   (right < this.curr && this.arr[smallest][0] > this.arr[right][0])
    while (
      (left < this.curr && this.comparator(this.arr, smallest, left)) ||
      (right < this.curr && this.comparator(this.arr, smallest, right))
    ) {
      if (left < this.curr && this.comparator(this.arr, smallest, left)) {
        smallest = left;
      }

      if (right < this.curr && this.comparator(this.arr, smallest, right)) {
        smallest = right;
      }

      let temp = this.arr[smallest];
      this.arr[smallest] = this.arr[index];
      this.arr[index] = temp;

      index = smallest;
      left = smallest * 2 + 1;
      right = smallest * 2 + 2;
    }

    return removedValue;
  }
}

const calcWinner = function (str) {
  let alice = new PriorityQueue(
    str.length,
    (arr, first, second) => arr[first] < arr[second]
  );

  let bob = new PriorityQueue(
    str.length,
    (arr, first, second) => arr[first] < arr[second]
  );

  const obj = {};

  for (let i = 1; i <= str.length; i++) {
    if (str[i - 1] === "A") {
      alice.push(i);
      if (i === 1) {
        obj["one"] = "Alice";
      }
    } else {
      bob.push(i);
      if (i === 1) {
        obj["one"] = "Bob";
      }
    }
  }

  const N = str.length;

  while (alice.curr > 0 && bob.curr > 0) {
    let first;

    if (obj["one"] === "Alice") {
      first = 1;
    } else {
      const el = alice.top();
      alice.remove();
      const num = alice.top();
      first = num;
      alice.push(el);
    }

    const second = bob.top();

    if (second === N && first < second && obj["one"] === "Alice") {
      // alice is smaller but he has 1
      alice.push(second);
      bob.remove();
      // console.log("8888");
    } else if (first === N && obj["one"] === "Bob") {
      const el = alice.remove();
      const num = alice.top();
      // console.log("Possible or not!!!");

      if (num && num > second) {
        // alice win
        alice.push(second);
        alice.push(el);
        bob.remove();
        obj["one"] = "Alice";
      } else {
        // bob win
        bob.push(first);
      }
    } else if (first === 1 && second === N) {
      // console.log("9999");
      // alice win
      const el = bob.remove();
      const num = bob.top();

      if (num) {
        // bob win
        bob.push(first);
        bob.push(el);
        alice.remove();
      } else {
        alice.push(el);
      }
    } else if (first > second) {
      // console.log("yh1tt1");

      // alice win
      alice.push(second);
      bob.remove();
    } else {
      // console.log(first, second);
      // bob win --- second > first
      bob.push(first);
      alice.remove();
    }
  }

  console.log(alice.curr, bob.curr, alice.curr > bob.curr ? "Alice" : "Bob");
};

calcWinner("AB"); // alice
calcWinner("BA"); // bob
calcWinner("ABAB"); // bob
calcWinner("BABA"); // bob
calcWinner("BAAA"); // alice
calcWinner("AAAAB"); // alice
calcWinner("BAAAB"); // bob
calcWinner("BBBAAA"); // alice
calcWinner("ABABB"); // alice
