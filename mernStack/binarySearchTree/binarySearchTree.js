class Node {
  constructor(vlaue) {
    this.value = vlaue;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    if (newNode.value < root.value) {
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
    if(!root)return null
    console.log(root.value);
    this.preOrder(root.left);
    this.preOrder(root.right);
  }

    inOrder(root=this.root) {
      if(!root)return null
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }

  postOrder(root) {
    if(!root)return null
    this.postOrder(root.left);
    this.postOrder(root.right);
    console.log(root.value);
  }

  isValidBST(root, min = null, max = null) {
    if (!root) {
      return true;
    }
    if (max !== null && root.value >= max) {
      return false;
    }
    if (min !== null && root.value <= min) {
      return false;
    }

    const leftSide = this.isValidBST(root.left, min, root.value);
    const rightSide = this.isValidBST(root.right, root.value, max);

    return leftSide && rightSide;
  }



  delete(value){
    this.root=this.deleteNode(this.root, value);
  }

  deleteNode(root,value){
    if(!root)return null

    if(value<root.value){
        root.left=this.deleteNode(root.left,value)
    }else if(value>root.value){
        root.right=this.deleteNode(root.right,value)
    }else{
        if(!root.left && !root.right){
            return null
        }
        if(!root.left){
           return root.right
        }else if(!root.right){
            return root.left
        }

        root.value=this.root.min(root.right)
        root.right=this.deleteNode(root.right,value)
    }
    return root
  }

}

let root=new BinarySearchTree()

root.insert(10)
root.insert(1)
root.insert(14)
root.insert(12)
root.insert(13)
root.insert(13)
root.inOrder()
root.delete(12)
root.inOrder()
