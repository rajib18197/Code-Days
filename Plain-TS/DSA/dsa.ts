// // // class DisjointSet {
// // //   private parent: number[];
// // //   private rank: number[];
// // //   private size: number[];

// // //   constructor(length: number) {
// // //     this.parent = Array.from({ length: length }, (_, i) => i);
// // //     this.rank = Array.from({ length: length }, () => 1);
// // //     this.size = Array.from({ length: length }, () => 1);
// // //   }

// // //   findUltimateParent(u: number): number {
// // //     if (this.parent[u] === u) {
// // //       return u;
// // //     }

// // //     return (this.parent[u] = this.findUltimateParent(this.parent[u]));
// // //   }

// // //   unionByRank(u: number, v: number): boolean {
// // //     const ult_u: number = this.findUltimateParent(u);
// // //     const ult_v: number = this.findUltimateParent(v);

// // //     if (ult_u === ult_v) {
// // //       return false;
// // //     }

// // //     if (this.rank[ult_u] === this.rank[ult_v]) {
// // //       this.parent[ult_u] = ult_v;
// // //       this.rank[ult_v]++;
// // //       return true;
// // //     }

// // //     if (this.rank[ult_u] < this.rank[ult_v]) {
// // //       this.parent[ult_u] = ult_v;
// // //       return true;
// // //     }

// // //     if (this.rank[ult_u] > this.rank[ult_v]) {
// // //       this.parent[ult_v] = ult_u;
// // //       return true;
// // //     }

// // //     return false;
// // //   }

// // //   unionBySize(u: number, v: number): boolean {
// // //     const ult_u: number = this.findUltimateParent(u);
// // //     const ult_v: number = this.findUltimateParent(v);

// // //     if (ult_u === ult_v) {
// // //       return false;
// // //     }

// // //     if (this.size[ult_u] === this.size[ult_v]) {
// // //       this.parent[ult_u] = ult_v;
// // //       this.size[ult_v] += this.size[ult_u];
// // //       return true;
// // //     }

// // //     if (this.size[ult_u] < this.size[ult_v]) {
// // //       this.parent[ult_u] = ult_v;
// // //       this.size[ult_v] += this.size[ult_u];
// // //       return true;
// // //     }

// // //     if (this.size[ult_u] > this.size[ult_v]) {
// // //       this.parent[ult_v] = ult_u;
// // //       this.size[ult_u] += this.size[ult_v];
// // //       return true;
// // //     }

// // //     return false;
// // //   }
// // // }

// // // const ds: DisjointSet = new DisjointSet(3);
// // // ds.unionByRank(1, 2);

// // // // const arr: Array<(number, number)> = [1, 2];
// // // let arr: [number, number];

// // // arr = [1, 2];

// // // for (let i = 1; i <= 10; i++) {
// // //   let modified_i = i % 5;
// // //   let result = "";

// // //   if (i <= 5) {
// // //     if (i !== 1) {
// // //       for (let k = 1; k < i; k++) {
// // //         result = result + " ";
// // //       }
// // //     }
// // //     for (let j = modified_i || 5; j <= 5; j++) {
// // //       result = result + j + " ";
// // //     }
// // //   } else {
// // //     if (i !== 10) {
// // //       for (let k = 10; k > i; k--) {
// // //         result = result + " ";
// // //       }
// // //     }
// // //     let total = modified_i || 5;
// // //     for (let j = 1; j <= total; j++) {
// // //       result = result + j + " ";
// // //     }
// // //   }
// // //   console.log(result);
// // // }

// // // class NodeBST<T> {
// // //   constructor(
// // //     public data: T,
// // //     public left: NodeBST<T> | null = null,
// // //     public right: NodeBST<T> | null = null
// // //   ) {}
// // // }

// // // const preorderBST = function (arr: number[]) {
// // //   const stack1: [number, NodeBST<number> | null, string][] = [];
// // //   const stack2: [number, NodeBST<number> | null, string][] = [];
// // //   stack1.push([Number.MIN_VALUE, null, ""]);
// // //   stack2.push([Number.MAX_VALUE, null, ""]);

// // //   let index = 0;
// // //   let root = null;

// // //   while (index !== arr.length && stack1.length !== 0 && stack2.length !== 0) {
// // //     if (arr[index] < stack1[stack1.length - 1][0]) {
// // //       return null;
// // //     }

// // //     while (arr[index] > stack2[stack2.length - 1][0]) {
// // //       stack1.pop();
// // //       stack2.pop();
// // //     }

// // //     const lower = stack1.pop();
// // //     const upper = stack2.pop();

// // //     if (!lower && !upper) {
// // //       continue;
// // //     }

// // //     let newNode = null;

// // //     if (lower[0] === Number.MIN_VALUE && upper[0] === Number.MAX_VALUE) {
// // //       root = new NodeBST(arr[index]);
// // //       newNode = root;
// // //     } else {
// // //       if (lower[1] !== null) {
// // //         const node = lower[1];
// // //         // console.log(node, 21);
// // //         node[lower[2]] = new NodeBST(arr[index]);
// // //         newNode = node[lower[2]];
// // //       } else {
// // //         const node = upper[1];
// // //         // console.log(node, 22);
// // //         node[upper[2]] = new NodeBST(arr[index]);
// // //         newNode = node[upper[2]];
// // //       }
// // //     }

// // //     stack1.push([arr[index], newNode, "right"]);
// // //     stack2.push([upper[0], null, ""]);

// // //     stack1.push([lower[0], null, ""]);
// // //     stack2.push([arr[index], newNode, "left"]);

// // //     index++;
// // //   }
// // //   return root;
// // // };

// // // const arr = [10, 5, 1, 7, 40, 50];

// // // console.log(preorderBST(arr));

// // // const months = [10, 1, 2, 3, 4, 5, 6, 7, 8, 100];
// // // const months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
// // const months = [
// //   73, 8, 55, 26, 97, 48, 37, 47, 35, 55, 5, 17, 62, 2, 60, 23, 99, 73, 34, 75,
// //   7, 46, 82, 84, 29, 41, 32, 31, 52, 32,
// // ];
// // let count = 0;
// // for (let i = 1; i <= months.length; i++) {
// //   let k = i;
// //   let final = i % 10;
// //   let isSame = true;
// //   while (k > 0) {
// //     let rem = k % 10;
// //     k = Math.floor(k / 10);

// //     if (final === rem) {
// //       final = rem;
// //       continue;
// //     } else {
// //       isSame = false;
// //       break;
// //     }
// //   }
// //   if (isSame === false) continue;
// //   for (let j = 1; j <= months[i - 1]; j++) {
// //     let k = j;
// //     let final1 = j % 10;
// //     let isSame = true;
// //     while (k > 0) {
// //       let rem = k % 10;
// //       k = Math.floor(k / 10);

// //       if (final1 === rem) {
// //         final1 = rem;
// //         continue;
// //       } else {
// //         isSame = false;
// //         break;
// //       }
// //     }
// //     if (isSame === false) continue;
// //     if (final === final1) {
// //       console.log(i, j);
// //       count++;
// //     }
// //   }
// // }

// // console.log(count);
// const transformToArrFromStr = function (str: string) {
//   return str.split(" ").map((s) => Number(s));
// };

// const arr = transformToArrFromStr(`9 9 9 9 9 9 9 9 9`);
// // const arr = transformToArrFromStr(`2 2 1 2`);
// // const arr = transformToArrFromStr(`0 1 2`);
// // const arr = transformToArrFromStr(`4 3 2 3 4`);
// let min = 0;
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] < arr[min]) {
//     min = i;
//   }
// }
// arr[min] = arr[min] + 1;
// let product = 1;
// for (let i = 0; i < arr.length; i++) {
//   product = product * arr[i];
// }

// console.log(product);

const getProps = function <T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  const value = obj[key];
  console.log(value);
  return value;
};
