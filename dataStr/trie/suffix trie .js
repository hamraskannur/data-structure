class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class SuffixTrie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(suffix) {
    let node = this.root;
    for (const char of suffix) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEndOfWord = true;
  }

  search(substring) {
    let node = this.root;
    for (const char of substring) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return node.isEndOfWord;
  }
}

// Example usage
const suffixTrie = new SuffixTrie();
const inputString = "banana";

// Insert all the suffixes of the input string into the suffix trie
for (let i = 0; i < inputString.length; i++) {
  suffixTrie.insert(inputString.slice(i));
}

console.log(suffixTrie.search("ana")); // true
console.log(suffixTrie.search("nan")); // false
console.log(suffixTrie.search("app")); // false
