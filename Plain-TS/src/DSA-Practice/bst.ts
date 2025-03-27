type PrimitiveProps = {
  mode: "primitive";
};

type ReferenceProps<T> = {
  mode: "reference";
  key: keyof T;
};

type InsertNodeProps<T> = (PrimitiveProps | ReferenceProps<T>) & {
  node: NodeBST<T> | null;
  data: T;
};

class NodeBST<T> {
  constructor(
    public data: T,
    public left: NodeBST<T> | null = null,
    public right: NodeBST<T> | null = null
  ) {}
}

const insert = function <T>(props: InsertNodeProps<T>) {
  if (props.node === null) {
    const newNode = new NodeBST<T>(props.data);
    return newNode;
  }

  if (props.mode === "primitive") {
    if (props.node.data > props.data) {
      props.node.left = insert({ ...props, node: props.node.left });
    } else {
      props.node.right = insert({ ...props, node: props.node.right });
    }

    return props.node;
  } else {
    if (props.node.data[props.key] > props.data[props.key]) {
      props.node.left = insert({ ...props, node: props.node.left });
    } else {
      props.node.right = insert({ ...props, node: props.node.right });
    }

    return props.node;
  }
};

const constructBST = function <T>(
  arr: T[],
  options: PrimitiveProps | ReferenceProps<T>
) {
  let root = null;

  for (let i = 0; i < arr.length; i++) {
    root = insert({
      node: root,
      data: arr[i],
      ...options,
    });
  }
  return root;
};

const inorderTraversal = function <T>(node: NodeBST<T> | null): T[] {
  const ans: T[] = [];
  if (node === null) {
    return ans;
  }

  const left = inorderTraversal(node.left);
  ans.push(node.data);
  const right = inorderTraversal(node.right);
  return [...left, ...ans, ...right];
};

const merge2SortedArr = function <T>(arr1: T[], arr2: T[]) {
  const mergedArr = [];
  let i = 0;
  let j = 0;
  let k = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArr[k++] = arr1[i++];
    } else {
      mergedArr[k++] = arr2[j++];
    }
  }

  while (i < arr1.length) {
    mergedArr[k++] = arr1[i++];
  }

  while (j < arr2.length) {
    mergedArr[k++] = arr2[j++];
  }

  return mergedArr;
};

const merge2BST = function <T>(
  root1: NodeBST<T> | null,
  root2: NodeBST<T> | null
) {
  //   const root1Ans = inorderTraversal(root1);
  //   const root2Ans = inorderTraversal(root2);
  //   const ans = merge2SortedArr(root1Ans, root2Ans);
  //   console.log(ans);
  //   return ans;
  if (root1 === null || root2 === null) {
    return;
  }

  const stack1: NodeBST<T>[] = [];
  const stack2: NodeBST<T>[] = [];

  while (root1) {
    stack1.push(root1);
    root1 = root1.left;
  }

  while (root2) {
    stack2.push(root2);
    root2 = root2.left;
  }

  const ans: T[] = [];
  let i = 0;
  while (stack1.length !== 0 && stack2.length !== 0) {
    const first = stack1[stack1.length - 1];
    const second = stack2[stack2.length - 1];
    if (first.data < second.data) {
      ans[i++] = first.data;
      stack1.pop();
      let curr = first.right;
      console.log(curr?.data);

      while (curr !== null) {
        stack1.push(curr);
        curr = curr.left;
      }
    } else {
      ans[i++] = second.data;
      stack2.pop();
      let curr = second.right;
      console.log(curr?.data, 22);
      while (curr !== null) {
        stack2.push(curr);
        curr = curr.left;
      }
    }
  }

  while (stack1.length !== 0) {
    const first = stack1[stack1.length - 1];
    ans[i++] = first.data;
    stack1.pop();

    let curr = first.right;
    while (curr !== null) {
      stack1.push(curr);
      curr = curr.left;
    }
  }

  while (stack2.length !== 0) {
    const second = stack2[stack2.length - 1];
    ans[i++] = second.data;
    stack2.pop();

    let curr = second.right;
    while (curr !== null) {
      stack2.push(curr);
      curr = curr.right;
    }
  }

  console.log(ans);
};

export const init = function () {
  const arr1 = [5, 3, 6, 2, 4];
  const arr2 = [2, 1, 3, 7, 6];
  const root1 = constructBST(arr1, { mode: "primitive" });
  const root2 = constructBST(arr2, { mode: "primitive" });
  // console.log(root1);
  // console.log(root2);
  merge2BST(root1, root2);
  //   [1, 2, 2, 3, 3, 4, 5, 6, 6, 7]

  //   const arr = [16, 27, 6, 5, 45, 33, 65, 1];
  //   const root = constructBST(arr, { mode: "primitive" });
  //   const ansArr = inorderTraversal(root);

  //   console.log(ansArr);

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

  //   const options: ReferenceProps<PersonInfo> = {
  //     mode: "reference",
  //     key: "age",
  //   };
  //   const root2 = constructBST(personPreorder, options);
  //   const ans = inorderTraversal(root2);
  //   console.log(ans);
};
