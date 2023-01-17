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
      this.insert(str.slice);
    }
  } 
}









