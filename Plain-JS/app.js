"use strict";

const obj = {
  c: 1,
  get count() {
    return this.c++;
  },
};

Object.defineProperty(Object, "assignDescriptors", {
  writable: true,
  enumerable: false,
  configurable: true,
  value: function (target, ...sources) {
    for (const source of sources) {
      for (const name of Object.getOwnPropertyNames(source)) {
        const desc = Object.getOwnPropertyDescriptor(source, name);
        Object.defineProperty(target, name, desc);
      }
    }
    return target;
  },
});

const clone = Object.assign({}, obj);
// console.log(clone, clone.count);
// console.log(obj);

// console.log(Object.getOwnPropertyDescriptor(obj, "c"));
// console.log(Object.getOwnPropertySymbols(obj));
const obj2 = Object.create(
  { a: 10 },
  {
    b: {
      value: 20,
      enumerable: true,
      writable: true,
      configurable: true,
    },
  }
);

// console.log(obj2);

const clone2 = Object.assignDescriptors({}, obj);
// console.log(clone2);

const lockObj = Object.seal(
  Object.create(Object.freeze({ x: 1 }), {
    y: { value: 2, writable: true },
  })
);

lockObj.y = 100;
console.log(lockObj);
// Object.defineProperty(lockObj, "val", {
//   enumerable: true,
// });
// console.log(Object.getOwnPropertyDescriptors(lockObj));
