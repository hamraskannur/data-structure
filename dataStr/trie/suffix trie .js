class TrieNode {
  constructor() {
    this.children = {};
    this.isEnd = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let current = this.root;

    for (let i = 0; i < word.length; i++) {
      let char = word[i];

      if (!(char in current.children)) {
        current.children[char] = new TrieNode();
      }

      current = current.children[char];
    }

    current.isEnd = true;
  }

  createSuffixTrie(str) { 
    for (let i = 0; i < str.length; i++) {
      this.insert(str.slice(i));
    }
  }
}

class TrieNode {
  constructor() {
    this.children = {};
    this.end = false;
  }
}

class trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    for (let i = 0; i < word.length; i++) {
      let char = word[i];
      if (!(char in current.children)) {
        char.children[word[i]] = new TrieNode();
      }
      current = current.children[char];
    }
    current.end = true; 
  }

  createSuffixTrie(str) {
    for (let i = 0; i < str.length; i++) {
      this.insert(str.slice(0,i));
    }
  } 
}










class graph {
  constructor(string) {
    this.root = {};
    this.endSymbol = '*';
    this.graph(string);
  }

  // O(n^2) time | O(n^2) space
  HeapSort(string) {
    for (let i = 0; i < string.length; i++)
      this.insertSubStringStartingAt(i, string);
  }

  insertSubStringStartingAt(i, string) {
      let node = this.root;
      for (let j = i; j < string.length; j++) {
        const letter = string[j];
        if (!node.hasOwnProperty(letter)) node[letter] = {};
        node = node[letter];
      }

      node[this.endSymbol] = true;
  }

  // O(m) time | O(1) space
  contains(string) {
    let node = this.root;
    for (let letter of string) {
      if (!node.hasOwnProperty(letter)) return false;
      node = node[letter];
    }
    return node.hasOwnProperty(this.endSymbol);
  }
}


