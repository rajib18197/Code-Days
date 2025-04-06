// "use strict";

// // const obj = {
// //   c: 1,
// //   get count() {
// //     return this.c++;
// //   },
// // };

// // Object.defineProperty(Object, "assignDescriptors", {
// //   writable: true,
// //   enumerable: false,
// //   configurable: true,
// //   value: function (target, ...sources) {
// //     for (const source of sources) {
// //       for (const name of Object.getOwnPropertyNames(source)) {
// //         const desc = Object.getOwnPropertyDescriptor(source, name);
// //         Object.defineProperty(target, name, desc);
// //       }
// //     }
// //     return target;
// //   },
// // });

// // const clone = Object.assign({}, obj);
// // // console.log(clone, clone.count);
// // // console.log(obj);

// // // console.log(Object.getOwnPropertyDescriptor(obj, "c"));
// // // console.log(Object.getOwnPropertySymbols(obj));
// // const obj2 = Object.create(
// //   { a: 10 },
// //   {
// //     b: {
// //       value: 20,
// //       enumerable: true,
// //       writable: true,
// //       configurable: true,
// //     },
// //   }
// // );

// // // console.log(obj2);

// // const clone2 = Object.assignDescriptors({}, obj);
// // // console.log(clone2);

// // const lockObj = Object.seal(
// //   Object.create(Object.freeze({ x: 1 }), {
// //     y: { value: 2, writable: true },
// //   })
// // );

// // lockObj.y = 100;
// // console.log(lockObj);
// // // Object.defineProperty(lockObj, "val", {
// // //   enumerable: true,
// // // });
// // // console.log(Object.getOwnPropertyDescriptors(lockObj));

// // const iterable = [10, 20, 30, 40, 50];
// // const iter = iterable[Symbol.iterator]();
// // console.dir(iter);
// // console.dir(iterable);
// // console.dir(iter[Symbol.iterator]());

// function words(s) {
//   let r = /\s+|s/g;
//   r.lastIndex = s.match(/[^ ]/).index;
//   console.log(s.match(/[^ ]/g));
//   return {
//     [Symbol.iterator]() {
//       console.log(this);
//       return this;
//     },
//     next() {
//       let start = r.lastIndex;
//       console.log(start, 11);
//       if (start < s.length) {
//         let match = r.exec(s);
//         console.log(match, 22);
//         if (match) {
//           return { value: s.substring(start, match.index) };
//         }
//       }
//       return { done: true };
//     },
//   };
// }

// console.log([...words(" abc def ghi! ")]);
// console.log(" abc def ghi! ".trim().split(" "));

// function split(str, dividedBy) {
//   let arr = [];
//   let word = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === dividedBy) {
//       if (word) {
//         arr.push(word);
//       }
//       word = "";
//     } else {
//       word += str[i];
//     }
//   }

//   if (word) {
//     arr.push(word);
//     word = "";
//   }
//   // console.log(arr);
//   return arr;
// }

// split(" abc def ghi! ", " ");
