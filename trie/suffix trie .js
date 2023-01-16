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
        if (!current.children[word[i]]) {
          current.children[word[i]] = new TrieNode();
        }
        current = current.children[word[i]];
      }
      current.isEnd = true;
    }
  
    createSuffixTrie(str) {
      for (let i = 0; i < str.length; i++) {
        this.insert(str.substr(i));
      }
    }
  }
  
  const trie = new Trie();
  trie.createSuffixTrie("banana");









  

  class Trie {
    constructor() {
      this.root = new TrieNode();
    }
  
    insert(node = this.root, str) {
      if (!str.length) return;
      if (!node.children[str[0]]) node.children[str[0]] = new TrieNode();
      this.insert(node.children[str[0]], str.slice(1));
      node.isEnd = true;
    }
  
    createSuffixTrie(str) {
      for (let i = 0; i < str.length; i++) {
        this.insert(this.root, str.slice(i));
      }
    }
  }
  