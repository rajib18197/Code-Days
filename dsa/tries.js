class TrieNode {
  constructor(char = "root") {
    this.char = char;
    this.childrens = Array.from({ length: 26 }, () => null);
    this.wordEnd = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insertWord(node, word) {
    if (word === "") {
      node.wordEnd = true;
      return;
    }

    const index = word[0].charCodeAt() - "a".charCodeAt();
    if (node.childrens[index] === null) {
      node.childrens[index] = new TrieNode(word[0]);
      this.insertWord(node.childrens[index], word.slice(1));
    } else {
      this.insertWord(node.childrens[index], word.slice(1));
    }
  }

  insert(word) {
    if (word === "") return;

    this.insertWord(this.root, word);
  }

  searchWord(node, word) {
    if (word === "") {
      if (node.wordEnd) return true;
      return false;
    }

    const index = word[0].charCodeAt() - "a".charCodeAt();
    const childNode = node.childrens[index];
    if (childNode === null) {
      return false;
    } else {
      return this.searchWord(childNode, word.slice(1));
    }
  }

  search(word) {
    return this.searchWord(this.root, word);
  }

  prefixSearch(node, prefix) {
    if (prefix === "") {
      return true;
    }

    const index = prefix[0].charCodeAt() - "a".charCodeAt();
    const childNode = node.childrens[index];
    if (childNode === null) {
      return false;
    } else {
      return this.prefixSearch(childNode, prefix.slice(1));
    }
  }

  startsWith(prefix) {
    return this.prefixSearch(this.root, prefix);
  }

  removeWord(root, word) {
    if (word.length === 0) {
      // If I have any children then only make the root wordEnd property to false.
      if (root.childrens.every((w) => w === null)) {
        return null;
      } else {
        root.wordEnd = false;
        return root;
      }
    }

    const index = word[0].charCodeAt() - "a".charCodeAt();

    if (root.childrens[index] === null) {
      return false;
    } else {
      const node = this.removeWord(root.childrens[index], word.slice(1));
      if (node === null) {
        root.childrens[index] = null;
        if (root.childrens.every((w) => w === null) && !root.wordEnd) {
          return null;
        } else {
          return root;
        }
      } else {
        return root;
      }
    }
  }

  remove(word) {
    this.removeWord(this.root, word);
  }
}

//********* Constructor Based Implementation **********///

// const Trie = function () {
//   this.root = new TrieNode();
// };

// const insertWord = function (node, word) {
//   if (word === "") {
//     node.wordEnd = true;
//     return;
//   }

//   const index = word[0].charCodeAt() - "a".charCodeAt();
//   if (node.childrens[index] === null) {
//     node.childrens[index] = new TrieNode(word[0]);
//     insertWord(node.childrens[index], word.slice(1));
//   } else {
//     insertWord(node.childrens[index], word.slice(1));
//   }
// };

// Trie.prototype.insert = function (word) {
//   if (word === "") return;

//   insertWord(this.root, word);
// };

// const searchWord = function (node, word) {
//   if (word === "") {
//     if (node.wordEnd) return true;
//     return false;
//   }

//   const index = word[0].charCodeAt() - "a".charCodeAt();
//   const childNode = node.childrens[index];
//   if (childNode === null) {
//     return false;
//   } else {
//     return searchWord(childNode, word.slice(1));
//   }
// };

// Trie.prototype.search = function (word) {
//   return searchWord(this.root, word);
// };

// const prefixSearch = function (node, prefix) {
//   if (prefix === "") {
//     return true;
//   }

//   const index = prefix[0].charCodeAt() - "a".charCodeAt();
//   const childNode = node.childrens[index];
//   if (childNode === null) {
//     return false;
//   } else {
//     return prefixSearch(childNode, prefix.slice(1));
//   }
// };
// Trie.prototype.startsWith = function (prefix) {
//   return prefixSearch(this.root, prefix);
// };
