// we start with the TrieNode
class TrieNode {
    constructor(key) {
      // the "key" value will be the character in sequence
      this.key = key;
  
      // we keep a reference to parent
      this.parent = null;
  
      // we have hash of children
      this.children = {};
  
      // check to see if the node is at the end
      this.end = false;
    }
  
    getWord = function () {
      let output = [];
      let node = this;
  
      while (node !== null) {
        output.unshift(node.key);
        node = node.parent;
      }
  
      return output.join("");
    };
  }
  class Trie {
    constructor() {
      this.root = new TrieNode(null);
    }
  
    insert = function (word) {
      let node = this.root; // we start at the root
  
      // for every character in the word
      for (let i = 0; i < word.length; i++) {
        // check to see if character node exists in children.
        if (!node.children[word[i]]) {
          // if it doesn't exist, we then create it.
          node.children[word[i]] = new TrieNode(word[i]);
  
          // we also assign the parent to the child node.
          node.children[word[i]].parent = node;
        }
  
        // proceed to the next depth in the trie.
        node = node.children[word[i]];
  
        // finally, we check to see if it's the last word.
        if (i == word.length - 1) {
          // if it is, we set the end flag to true.
          node.end = true;
        }
      }
    };
  
    // check if it contains a whole word.
    contains = function (word) {
      let node = this.root;
  
      // for every character in the word
      for (let i = 0; i < word.length; i++) {
        // check to see if character node exists in children.
        if (node.children[word[i]]) {
          // if it exists, proceed to the next depth of the trie.
          node = node.children[word[i]];
        } else {
          // doesn't exist, return false since it's not a valid word.
          return false;
        }
      }
  
      // we finished going through all the words, but is it a whole word?
      return node.end;
    };
  
    // returns every word with given prefix
    find = function (prefix) {
      let node = this.root;
      let output = [];
  
      // for every character in the prefix
      for (let i = 0; i < prefix.length; i++) {
        // make sure prefix actually has words
        if (node.children[prefix[i]]) {
          node = node.children[prefix[i]];
        } else {
          // there's none. just return it.
          return output;
        }
      }
  
      // recursively find all words in the node
      this.findAllWords(node, output);
  
      return output;
    };
  
    // recursive function to find all words in the given node.
    findAllWords = (node, arr) => {
      // base case, if node is at a word, push to output
      if (node.end) {
        arr.unshift(node.getWord());
      }
  
      // iterate through each children, call recursive findAllWords
      for (let child in node.children) {
        this.findAllWords(node.children[child], arr);
      }
    };
  
    // removes a word from the trie.
    remove = function (word) {
      let root = this.root;
      if (!word) return;
      // recursively finds and removes a word
      const removeWord = (node, word) => {
        // check if current node contains the word
        if (node.end && node.getWord() === word) {
          // check and see if node has children
          let hasChildren = Object.keys(node.children).length > 0;
  
          // if has children we only want to un-flag the end node that marks the end of a word.
          // this way we do not remove words that contain/include supplied word
          if (hasChildren) {
            node.end = false;
          } else {
            // remove word by getting parent and setting children to empty dictionary
            node.parent.children = {};
          }
  
          return true;
        }
  
        // recursively remove word from all children
        for (let key in node.children) {
          removeWord(node.children[key], word);
        }
  
        return false;
      };
  
      // call remove word on root node
      removeWord(root, word);
    };
  }
  //   Input:
  const trie = new Trie();
  
  // insert few values
  trie.insert("peter");
  trie.insert("piper");
  trie.insert("picked");
  trie.insert("pickled");
  trie.insert("pepper");
  
  // check contains method
  console.log(trie.contains("picked"));
  console.log(trie.contains("pepper"));
  trie.remove("pepper");
  // check find method
  console.log(trie.find("pi"));
  console.log(trie.find("pe"));
  
  // Output:
  // true
  // true
  // ["pickled", "picked", "piper"]
  // ["peter"]
  
  //
  
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  class TrieNode {
    constructor(key) {
      this.key = key;
      this.parent = null;
      this.children = {};
      this.end = false ;
    }
  
    getWord = function () {
      let outPut = [];
      let node = this;
      while (node != null) {
        outPut.unshift(node.key);
        node = node.parent;
      }
      return outPut.join("");
    };
  }
  
  class Trie {
    constructor() {
      this.root = new TrieNode(null);
    }
  
    insert = function (word) {
      node = this.root;
      for (let i = 0; i < word.length; i++) {
        if (!node.children[word[i]]) {
          node.children[word[i]] = new TrieNode(word[i]);
          node.children[word[i]].parent = node;
        }
        node = node.children[word[i]];
        if (i == word.length - 1) {
          node.end = true;
        }
      }
    };
  
    contains = function (word) {
      let node = this.root;
      let i;
      for (i = 0; i < word.length; i++) {
        if (node.children[word[i]]) {
          node = node.children[word[i]];
        } else {
          return false;
        }
      }
      return this.end;
    };
  
    find = function (prefix) {
      let node = this.root;
      let output = [];
  
      for (let i = 0; i < prefix.length; i++) {
        if (node.children[prefix[i]]) {
          node = node.children[prefix[i]];
        } else {
          return output;
        }
      }
      this.findAllWords(node, output);
  
      return output;
    };
    findAllWords = (node, arr) => {
      if (node.end) {
        arr.unshift(node.getWord());
      }
  
      for (let child in node.children) {
        this.findAllWords(node.children[child], arr);
      }
    };
  
    remove = function (word) {
      let root = this.root;
      if (!word) return;
      const removeWord = (node, word) => {
        if (node.end && node.getWord() === word) {
          let hasChildren = Object.keys(node.children).length > 0;
          if (hasChildren) {
            node.end = false;
          } else {
            node.parent.children = {};
          }
          return true;
        }
        for (let key in node.children) {
          removeWord(node.children[key], word);
        }
        return false;
      };
      removeWord(root, word);
    };
  }
  
  // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  class TrieNode {
    constructor(key) {
      this.key = key;
      this.parent = null;
      this.children = {};
      this.end = false;
    }
  
    getWord = function () {
      let node = this;
      let outPut = [];
      while (node != null) {
        outPut.unshift(node.key);
        node = node.parent;
      }
      return false;
    };
  }
  
  class Trie {
    constructor() {
      this.root = new TrieNode(null);
    }
  // log(n)
    insert = function (word) {
      for (let i = 0; i < word.length; i++) {
        if (!node.children[word[i]]) {
          node.children = new TrieNode(word[i]);
          node.children[word[i]].parent = node;
        }
        node = node.children[word[i]];
        if (word.length - 1 === word.length) {
          node.end = true;
        }
      }
    };
    // log(n)
    contains = function (word) {
      let node = this.root;
      for (let i = 0; i < word.length; i++) {
        if (node.children[word[i]]) {
          node = node.children[word[i]];
        } else {
          return false;
        }
      }
      return node.end;
    };
    // o(n)
    delete = function (word) {
      let node = this.root;
      if (!node) return;
      const removeWord = (node, word) => {
        if (node.end && node.getWord() === word) {
          hasChildren = Object.keys(node.key).length > 0;
          if (hasChildren) {
            node.end = false;
          } else {
            node.parent.children = {};
          }
          return true;
        }
        for (key in node.children) {
          this.removeWord(node.children[key], word);
        }
        return false
      };
      removeWord(node, word);
    };
  }
  