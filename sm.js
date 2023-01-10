class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  IsEm() {
    return this.root === null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.IsEm()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  insertNode(root, newNode) {
    if (root.value < newNode) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }
  
  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }
  deleteNode(root, value) {
    if (!root) {
      return null;
    }
    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (!root.left && root.right) {
        return null;
      }

      if (!root.left) {
        return root.right;
      }
      if (!root.right) {
        return root.left;
      }

      root.value=this.min(root.right)
      root.right=this.deleteNode(root.right,root.value)
    }
    return root
  }

  min(root){
    if(!root.left){
     return root.left
    }else{
       this.min(root.left)
    }
  }
}


const bst = new BinarySearchTree()

bst.insert(1)
bst.insert(2)

bst.insert(8)
bst.insert(2)
bst.insert(3)
bst.insert(4)

