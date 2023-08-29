class Node {
  constructor(vlaue) {
    this.vlaue = vlaue;
    this.vlaue.left = null;
    this.vlaue.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        insertNode(root.right, newNode);
      }
    }
  }

  search(root,value) {
    if (!root) {
      return null;
    }else{
        if(root.value===value){
            return value
        }else if(value<root.value){
            this.search(root.left,value)
        }else{
            this.search(root.right,value)
        }
    }
  }


  preOrder(root) {
    console.log(root.value);
    this.preOrder(root.left);
    this.preOrder(root.right);
  }

  inOrder(root) {
    this.inOrder(root.left);
    console.log(root.value);
    this.inOrder(root.right);
  }

  postOrder(root) {
    this.postOrder(root.left);
    this.postOrder(root.right);
    console.log(root.value);
  }

}
