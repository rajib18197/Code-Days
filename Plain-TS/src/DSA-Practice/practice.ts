// type PrimitiveBSTFromPreorder = {
//   mode: "primitive";
// };

// type ReferenceBSTFromPreorder<T> = {
//   mode: "reference";
//   key: keyof T;
// };

// type BSTFromPreorderProps<T> = (
//   | PrimitiveBSTFromPreorder
//   | ReferenceBSTFromPreorder<T>
// ) & {
//   preorder: T[];
//   index: [number];
//   lower: number;
//   upper: number;
// };

// class NodeBST<T> {
//   constructor(
//     public data: T,
//     public left: NodeBST<T> | null = null,
//     public right: NodeBST<T> | null = null
//   ) {}
// }

// const comparator = <T, K extends keyof T>(data: T, key?: K) => {
//   if (key && typeof data[key] === "number") {
//     return data[key] as number;
//   }

//   return Number(data);
// };

// const constructBSTFromPreorder = function <T>(props: BSTFromPreorderProps<T>) {
//   if (props.index[0] === props.preorder.length) {
//     return null;
//   }

//   const value = props.preorder[props.index[0]];

//   const valueToCompare = comparator(
//     value,
//     props.mode === "reference" ? props.key : undefined
//   );

//   if (valueToCompare < props.lower || valueToCompare > props.upper) {
//     return null;
//   }

//   props.index[0] = props.index[0] + 1;
//   const node = new NodeBST(value);

//   const leftProps: BSTFromPreorderProps<T> =
//     props.mode === "primitive"
//       ? { ...props, upper: comparator(node.data, undefined) }
//       : {
//           ...props,
//           key: props.key,
//           upper: comparator(node.data, props.key),
//         };

//   const rightProps: BSTFromPreorderProps<T> =
//     props.mode === "primitive"
//       ? {
//           ...props,
//           lower: comparator(node.data, undefined),
//         }
//       : {
//           ...props,
//           key: props.key,
//           lower: comparator(node.data, props.key),
//         };

//   node.left = constructBSTFromPreorder(leftProps);
//   node.right = constructBSTFromPreorder(rightProps);

//   return node;
// };

// export const init = () => {
//   type PersonInfo = {
//     fullName: string;
//     age: number;
//     subject: "CSE" | "Math" | "EEE";
//     profession: "Teacher" | "Engineer";
//   };

//   const personPreorder: PersonInfo[] = [
//     { fullName: "Ra Ju", age: 25, subject: "CSE", profession: "Engineer" },
//     { fullName: "Max Miller", age: 22, subject: "EEE", profession: "Engineer" },
//     { fullName: "Mesut Ozil", age: 35, subject: "Math", profession: "Teacher" },
//     { fullName: "Jim Rohn", age: 28, subject: "CSE", profession: "Teacher" },
//   ];

//   // const preorder = [10, 5, 1, 7, 40, 50];

//   const index: [number] = [0];
//   const root = constructBSTFromPreorder({
//     mode: "reference",
//     preorder: personPreorder,
//     index,
//     lower: Number.MIN_VALUE,
//     upper: Number.MAX_VALUE,
//     key: "age",
//   });

//   console.log(root);
// };
