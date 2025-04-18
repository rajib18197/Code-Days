// // type PrimitiveProps = {
// //   mode: "primitive";
// // };

// // type ReferenceProps<T> = {
// //   mode: "reference";
// //   key: keyof T;
// // };

// // type InsertNodeProps<T> = (PrimitiveProps | ReferenceProps<T>) & {
// //   node: NodeBST<T> | null;
// //   data: T;
// // };

// // class NodeBST<T> {
// //   constructor(
// //     public data: T,
// //     public left: NodeBST<T> | null = null,
// //     public right: NodeBST<T> | null = null
// //   ) {}
// // }

// // const insert = function <T>(props: InsertNodeProps<T>) {
// //   if (props.node === null) {
// //     const newNode = new NodeBST<T>(props.data);
// //     return newNode;
// //   }

// //   if (props.mode === "primitive") {
// //     if (props.node.data > props.data) {
// //       props.node.left = insert({ ...props, node: props.node.left });
// //     } else {
// //       props.node.right = insert({ ...props, node: props.node.right });
// //     }

// //     return props.node;
// //   } else {
// //     if (props.node.data[props.key] > props.data[props.key]) {
// //       props.node.left = insert({ ...props, node: props.node.left });
// //     } else {
// //       props.node.right = insert({ ...props, node: props.node.right });
// //     }

// //     return props.node;
// //   }
// // };

// // const constructBST = function <T>(
// //   arr: T[],
// //   options: PrimitiveProps | ReferenceProps<T>
// // ) {
// //   let root = null;

// //   for (let i = 0; i < arr.length; i++) {
// //     root = insert({
// //       node: root,
// //       data: arr[i],
// //       ...options,
// //     });
// //   }
// //   return root;
// // };

// // const inorderTraversal = function <T>(node: NodeBST<T> | null): T[] {
// //   const ans: T[] = [];
// //   if (node === null) {
// //     return ans;
// //   }

// //   const left = inorderTraversal(node.left);
// //   ans.push(node.data);
// //   const right = inorderTraversal(node.right);
// //   return [...left, ...ans, ...right];
// // };

// // // const merge2SortedArr = function <T>(arr1: T[], arr2: T[]) {
// // //   const mergedArr = [];
// // //   let i = 0;
// // //   let j = 0;
// // //   let k = 0;
// // //   while (i < arr1.length && j < arr2.length) {
// // //     if (arr1[i] < arr2[j]) {
// // //       mergedArr[k++] = arr1[i++];
// // //     } else {
// // //       mergedArr[k++] = arr2[j++];
// // //     }
// // //   }

// // //   while (i < arr1.length) {
// // //     mergedArr[k++] = arr1[i++];
// // //   }

// // //   while (j < arr2.length) {
// // //     mergedArr[k++] = arr2[j++];
// // //   }

// // //   return mergedArr;
// // // };

// // // const merge2BST = function <T>(
// // //   root1: NodeBST<T> | null,
// // //   root2: NodeBST<T> | null
// // // ) {
// // //   //   const root1Ans = inorderTraversal(root1);
// // //   //   const root2Ans = inorderTraversal(root2);
// // //   //   const ans = merge2SortedArr(root1Ans, root2Ans);
// // //   //   console.log(ans);
// // //   //   return ans;
// // //   if (root1 === null || root2 === null) {
// // //     return;
// // //   }

// // //   const stack1: NodeBST<T>[] = [];
// // //   const stack2: NodeBST<T>[] = [];

// // //   while (root1) {
// // //     stack1.push(root1);
// // //     root1 = root1.left;
// // //   }

// // //   while (root2) {
// // //     stack2.push(root2);
// // //     root2 = root2.left;
// // //   }

// // //   const ans: T[] = [];
// // //   let i = 0;
// // //   while (stack1.length !== 0 && stack2.length !== 0) {
// // //     const first = stack1[stack1.length - 1];
// // //     const second = stack2[stack2.length - 1];
// // //     if (first.data < second.data) {
// // //       ans[i++] = first.data;
// // //       stack1.pop();
// // //       let curr = first.right;
// // //       console.log(curr?.data);

// // //       while (curr !== null) {
// // //         stack1.push(curr);
// // //         curr = curr.left;
// // //       }
// // //     } else {
// // //       ans[i++] = second.data;
// // //       stack2.pop();
// // //       let curr = second.right;
// // //       console.log(curr?.data, 22);
// // //       while (curr !== null) {
// // //         stack2.push(curr);
// // //         curr = curr.left;
// // //       }
// // //     }
// // //   }

// // //   while (stack1.length !== 0) {
// // //     const first = stack1[stack1.length - 1];
// // //     ans[i++] = first.data;
// // //     stack1.pop();

// // //     let curr = first.right;
// // //     while (curr !== null) {
// // //       stack1.push(curr);
// // //       curr = curr.left;
// // //     }
// // //   }

// // //   while (stack2.length !== 0) {
// // //     const second = stack2[stack2.length - 1];
// // //     ans[i++] = second.data;
// // //     stack2.pop();

// // //     let curr = second.right;
// // //     while (curr !== null) {
// // //       stack2.push(curr);
// // //       curr = curr.right;
// // //     }
// // //   }

// // //   console.log(ans);
// // // };

// // // export const init = function () {
// // //   const arr1 = [5, 3, 6, 2, 4];
// // //   const arr2 = [2, 1, 3, 7, 6];
// // //   const root1 = constructBST(arr1, { mode: "primitive" });
// // //   const root2 = constructBST(arr2, { mode: "primitive" });
// // //   // console.log(root1);
// // //   // console.log(root2);
// // //   merge2BST(root1, root2);
// // //   //   [1, 2, 2, 3, 3, 4, 5, 6, 6, 7]

// // //   //   const arr = [16, 27, 6, 5, 45, 33, 65, 1];
// // //   //   const root = constructBST(arr, { mode: "primitive" });
// // //   //   const ansArr = inorderTraversal(root);

// // //   //   console.log(ansArr);

// // //   //   type PersonInfo = {
// // //   //     fullName: string;
// // //   //     age: number;
// // //   //     subject: "CSE" | "Math" | "EEE";
// // //   //     profession: "Teacher" | "Engineer";
// // //   //   };

// // //   //   const personPreorder: PersonInfo[] = [
// // //   //     { fullName: "Ra Ju", age: 25, subject: "CSE", profession: "Engineer" },
// // //   //     { fullName: "Max Miller", age: 22, subject: "EEE", profession: "Engineer" },
// // //   //     { fullName: "Mesut Ozil", age: 35, subject: "Math", profession: "Teacher" },
// // //   //     { fullName: "Jim Rohn", age: 28, subject: "CSE", profession: "Teacher" },
// // //   //   ];

// // //   //   const options: ReferenceProps<PersonInfo> = {
// // //   //     mode: "reference",
// // //   //     key: "age",
// // //   //   };
// // //   //   const root2 = constructBST(personPreorder, options);
// // //   //   const ans = inorderTraversal(root2);
// // //   //   console.log(ans);
// // // };

// // // type transformProps<T> = {
// // //   arr: T[];
// // //   cb: (element: T, index: number, givenArr: T[]) => T;
// // // };

// // // const transform = function <T>(props: transformProps<T>) {
// // //   const transformArr: T[] = [];
// // //   for (let i = 0; i < props.arr.length; i++) {
// // //     const value = props.cb(props.arr[i], i, props.arr);
// // //     transformArr.push(value);
// // //   }
// // //   return transformArr;
// // // };

// // // export const init = function () {
// // //   const arr = [1, 2, 3];
// // //   // arr.map((el, i, a) => {
// // //   //   console.log(el);
// // //   //   console.log(i);
// // //   //   console.log(a);
// // //   // });
// // //   const double = transform({
// // //     arr,
// // //     cb: (el: number, i: number, givenArr: number[]) => {
// // //       console.log(el);
// // //       console.log(i);
// // //       console.log(givenArr);
// // //       return el * 2;
// // //     },
// // //   });
// // //   console.log(double);
// // // };

// // const constructBSTFromPreorder = function (
// //   arr: number[],
// //   index: [number],
// //   minValue: number,
// //   maxValue: number
// // ) {
// //   if (arr.length === index[0]) {
// //     return null;
// //   }

// //   const value = arr[index[0]];
// //   index[0] += 1;
// //   if (value < minValue || value > maxValue) {
// //     return null;
// //   }

// //   const node = new NodeBST(value);
// //   node.left = constructBSTFromPreorder(arr, index, minValue, node.data);
// //   node.right = constructBSTFromPreorder(arr, index, node.data, maxValue);
// //   return node;
// // };

// // const constructBSTFromPostorder = function (
// //   arr: number[],
// //   index: [number],
// //   lower: number,
// //   upper: number
// // ) {
// //   if (index[0] === arr.length) {
// //     return null;
// //   }

// //   const value = arr[index[0]];

// //   if (value < lower || value > upper) {
// //     return null;
// //   }

// //   index[0] = index[0] - 1;
// //   const node = new NodeBST(value);
// //   node.right = constructBSTFromPostorder(arr, index, node.data, upper);
// //   node.left = constructBSTFromPostorder(arr, index, lower, node.data);
// //   return node;
// // };

// // const preorderBST = function (arr: number[]) {
// //   const stack1: [number, NodeBST<number> | null, "left" | "right" | ""][] = [];
// //   const stack2: [number, NodeBST<number> | null, "left" | "right" | ""][] = [];
// //   stack1.push([Number.MIN_VALUE, null, ""]);
// //   stack2.push([Number.MAX_VALUE, null, ""]);

// //   let index = 0;
// //   let root = null;

// //   while (index !== arr.length && stack1.length !== 0 && stack2.length !== 0) {
// //     if (arr[index] < stack1[stack1.length - 1][0]) {
// //       return null;
// //     }

// //     while (arr[index] > stack2[stack2.length - 1][0]) {
// //       stack1.pop();
// //       stack2.pop();
// //     }

// //     const lower = stack1.pop();
// //     const upper = stack2.pop();

// //     if (!lower && !upper) {
// //       continue;
// //     }

// //     let newNode = null;
// //     if (lower && upper) {
// //       if (lower[0] === Number.MIN_VALUE && upper[0] === Number.MAX_VALUE) {
// //         root = new NodeBST(arr[index]);
// //         newNode = root;
// //       } else {
// //         if (lower[1] !== null) {
// //           const node = lower[1];
// //           // console.log(node, 21);
// //           if (lower[2] !== "") {
// //             node[lower[2]] = new NodeBST(arr[index]);
// //             newNode = node[lower[2]];
// //           }
// //         } else {
// //           const node = upper[1];
// //           // console.log(node, 22);
// //           if (upper[2] !== "") {
// //             node[upper[2]] = new NodeBST(arr[index]);
// //             newNode = node[upper[2]];
// //           }
// //         }
// //       }

// //       stack1.push([arr[index], newNode, "right"]);
// //       stack2.push([upper[0], null, ""]);

// //       stack1.push([lower[0], null, ""]);
// //       stack2.push([arr[index], newNode, "left"]);

// //       index++;
// //     }
// //   }
// //   return root;
// // };

// // export const init = function () {
// //   // construct bst from preorder
// //   const arr = [10, 5, 1, 7, 40, 50];
// //   // const index: [number] = [0];
// //   // constructBSTFromPreorder(arr, index, Number.MIN_VALUE, Number.MAX_VALUE);
// //   // const arr = [1, 7, 5, 50, 40, 10];
// //   // const index: [number] = [arr.length - 1];
// //   // constructBSTFromPostorder(arr, index, Number.MIN_VALUE, Number.MAX_VALUE);
// //   preorderBST(arr);
// //   // construct bst from postorder
// //   // pre-order and bst
// //   // lowest common anchestor in a bst
// //   // Print bst element in a given range
// //   // check whether bst contains dead end
// //   // common nodes in two bst
// //   // sorted ll to balanced bst
// //   // merge two bst
// //   // fixing two nodes of a bst
// // };

// const createGraph = function (numOfVertices: number, edges: number[][]) {
//   const adj: number[][] = Array.from({ length: numOfVertices }, () => []);

//   for (let i = 0; i < edges.length; i++) {
//     const [u, v] = edges[i];
//     adj[u].push(v);
//     adj[v].push(u);
//   }

//   return adj;
// };

// type colors = 0 | 1 | -1;

// const isBipartiteGraphBFS = function (
//   startingVertex: number,
//   adj: number[][],
//   colors: colors[]
// ) {
//   const queue: number[] = [];
//   queue.push(startingVertex);
//   colors[startingVertex] = 0;

//   while (queue.length !== 0) {
//     const vertex = queue.shift()!;

//     for (let i = 0; i < adj[vertex].length; i++) {
//       const neighbourVertex = adj[vertex][i];
//       if (colors[neighbourVertex] === -1) {
//         colors[neighbourVertex] = (colors[vertex] + 1) % 2 === 0 ? 0 : 1;
//         queue.push(neighbourVertex);
//       } else {
//         if (colors[neighbourVertex] === colors[vertex]) {
//           return false;
//         }
//       }
//     }
//   }

//   return true;
// };

// const isBipartiteGraphDFS = function (
//   vertex: number,
//   adj: number[][],
//   colors: colors[]
// ) {
//   for (let i = 0; i < adj[vertex].length; i++) {
//     const neighbourVertex = adj[vertex][i];

//     if (colors[neighbourVertex] !== -1) {
//       colors[neighbourVertex] = 1;
//       const isBipartite = isBipartiteGraphBFS(neighbourVertex, adj, colors);

//       if (!isBipartite) {
//         return false;
//       }
//     } else {
//       if (colors[neighbourVertex] == colors[vertex]) {
//         return false;
//       }
//     }
//   }

//   return true;
// };

// export const init = () => {
//   const adj = [[1], [0, 3], [3], [1, 2]];
//   const colors: colors[] = Array.from({ length: 4 }, () => -1);

//   for (let i = 0; i < 4; i++) {
//     if (colors[i] === -1) {
//       const isBipartite = isBipartiteGraphBFS(i, adj, colors);
//       if (!isBipartite) {
//         console.log(isBipartite);
//         return false;
//       }
//     }
//   }

//   console.log(true);

//   return true;
// };

// const flattenObject = function (obj, flatten, parent) {
//   for (let key in obj) {
//     const value = obj[key];
//     const fullKey = `${parent}_${key}`;
//     if (
//       value !== null &&
//       typeof value === "object" &&
//       !(value instanceof Date) &&
//       !Array.isArray(value)
//     ) {
//       flattenObject(value, flatten, fullKey);
//     } else if (Array.isArray(value)) {
//       value.forEach((element, index) => {
//         const enhancedKey = `${fullKey}_${index}`;
//         if (element !== null && typeof element === "object") {
//           flattenObject(element, flatten, enhancedKey);
//         } else {
//           flatten[enhancedKey] = element;
//         }
//       });
//     } else {
//       flatten[fullKey] = value;
//     }
//   }
// };

type Primitive = string | number | boolean | Date | null | undefined;

// type Flatten = Record<string, Primitive>;

type JOIN<KEY_1, KEY_2> = KEY_1 extends string | number
  ? KEY_2 extends string | number
    ? `${KEY_1}_${KEY_2}`
    : never
  : never;

type Flatten<T, Parent extends string = ""> = {
  [K in keyof T & (string | number)]: T[K] extends Primitive
    ? { [Key in JOIN<Parent, K>]: T[K] }
    : T[K] extends Array<infer U>
    ? U extends Primitive
      ? { [key in JOIN<Parent, `${K}_0`>]: U }
      : Flatten<U, JOIN<Parent, `${K}_0`>>
    : Flatten<T[K], JOIN<Parent, K>>;
}[keyof T & (string | number)];

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
  k: infer I
) => void
  ? I
  : never;

type Flattened<T, P extends string> = UnionToIntersection<Flatten<T, P>>;

const flattenObject = function <T, P extends string>(
  obj: T,
  parent: string
): Flattened<T, P> {
  const flatten = {} as any;

  for (let key in obj) {
    const value = obj[key];
    const fullKey = `${parent}_${key}`;

    if (
      value !== null &&
      typeof value === "object" &&
      !(value instanceof Date) &&
      !Array.isArray(value)
    ) {
      const flatObj = flattenObject(value, fullKey);

      for (let prop in flatObj) {
        flatten[`${prop}`] = flatObj[prop];
      }
    } else if (Array.isArray(value)) {
      value.forEach((element, index) => {
        const enhancedKey = `${fullKey}_${index}`;

        if (element !== null && typeof element === "object") {
          const flatObj = flattenObject(element, enhancedKey);
          for (let prop in flatObj) {
            flatten[`${prop}`] = flatObj[prop];
          }
        } else {
          flatten[enhancedKey] = element;
        }
      });
    } else {
      flatten[fullKey] = value as Primitive;
    }
  }

  return flatten;
};

export const init = () => {
  type User = {
    firstName: string;
    address: {
      personal: {
        city: string;
        area: string;
      };
      office: {
        city: string;
        area: string;
      };
    };
    hobbies: string[];
    age: Date;
    isActive: boolean;
  };
  const user = {
    firstName: "Striver",
    address: {
      personal: {
        city: "ABC road",
        area: "1211",
      },
      office: {
        city: "DEF road",
        area: "1321",
      },
    },
    hobbies: ["reading", "sports", "cooking"],
    age: new Date(),
    isActive: true,
  };

  // type FlatterUser = Flattened<User, "user">;

  // const flatten = {};
  const flatten = flattenObject<User, "user">(user, "user");
  console.log(flatten.user_address_personal_city);
};
