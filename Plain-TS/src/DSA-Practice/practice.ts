type bstFromPreorder<T> = {
  preorder: T[];
  index: [number];
  lower: number;
  upper: number;
  key?: keyof T;
};

class NodeBST<T> {
  constructor(
    public data: T,
    public left: NodeBST<T> | null = null,
    public right: NodeBST<T> | null = null
  ) {}
}

const comparator = function <T>(data: T, key?: keyof T) {
  if (key && typeof data[key] === "number") {
    return data[key] as number;
  }

  return Number(data);
};

const constructBSTFromPreorder = function <T>({
  preorder,
  index,
  lower,
  upper,
  key,
}: bstFromPreorder<T>) {
  if (
    index[0] === preorder.length ||
    comparator(preorder[index[0]], key) < lower ||
    comparator(preorder[index[0]], key) > upper
  ) {
    return null;
  }

  const value = preorder[index[0]];

  index[0] = index[0] + 1;
  const node = new NodeBST(value);

  node.left = constructBSTFromPreorder({
    preorder,
    index,
    lower,
    upper: comparator(node.data, key),
    key,
  });

  node.right = constructBSTFromPreorder({
    preorder,
    index,
    lower: comparator(node.data, key),
    upper,
    key,
  });

  return node;
};

type Person = {
  firstName: string;
  age: number;
};

export const init = () => {
  //   const preorder = [10, 5, 1, 7, 40, 50];
  const preorder: Person[] = [
    { firstName: "raju", age: 25 },
    { firstName: "john", age: 30 },
    { firstName: "alice", age: 28 },
  ];
  const index: [number] = [0];
  const root = constructBSTFromPreorder({
    preorder,
    index,
    lower: Number.MIN_VALUE,
    upper: Number.MAX_VALUE,
    key: "age",
  });

  console.log(root);
};
