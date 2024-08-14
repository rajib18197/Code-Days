class Node {
  constructor(name, childrens) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.childrens = childrens || [];
  }
}

class Tree {
  root = null;
  constructor() {}

  createNode(parentName, childName) {
    const childNode = new Node(childName);
    const node = this.findNode(this.root, parentName);

    if (!node) {
      this.root = new Node(parentName);
      this.root.childrens.push(childNode);
      return;
    }

    node.childrens.push(childNode);
  }

  findNode(root, nodeName) {
    if (!root) return null;

    if (root.name === nodeName) {
      return root;
    }

    if (root.childrens.length === 0) return null;

    for (let i = 0; i < root.childrens.length; i++) {
      const node = this.findNode(root.childrens[i], nodeName);
      if (node) return node;
    }
    return null;
  }
}

const tree = new Tree();
tree.createNode("DSA", "Linked List");
tree.createNode("DSA", "Stack");
tree.createNode("Stack", "Disign A Stack with Queue");
tree.createNode("Linked List", "Doubly LL");
tree.createNode("Doubly LL", "Reverse A Doubly LL");
tree.createNode("Linked List", "Circular LL");
tree.createNode("Circular LL", "Detect and Remove a Loop");
console.log(tree.root);
