
class Node {
  constructor(value) {
    this.value = value;
    this.value.left = null;
    this.value.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    root = null;
  }

  isEmpty() {
    this.root === null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.isEmpty) {
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

  search(root, value) {
    if (!root) {
      return null;
    } else {
      if (root.value === value) {
        return value;
      } else if (value < root.value) {
        this.search(root.left, value);
      } else {
        this.search(root.right, value);
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
    this.postOrder(this.left);
    this.postOrder(this.right);
    console.log(this.value);
  }

  levelOrder() {
    const queue = [];
    queue.push(this.root);
    while (queue.length) {
      cur = queue.shift();
      console.log(cur.value);
      if (cur.left) {
        queue.push(cur.left);
      }
      if (cur.right) {
        queue.push(cur.right);
      }
    }
  }

  min(root) {
    if (!root.left) {
      return root.value;
    } else {
      this.min(root.left);
    }
  }
  max(root) {
    if (!root.right) {
      return root, value;
    } else {
      this.max(root.right);
    }
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

  findClosestValue(root, target) {
    let cur = root;
    closest = cur.value;
    while (cur != null) {
      if (Math.abs(closest - target) > Math.abs(cur.value - target)) {
        closest = cur.value;
      }
      if (target < cur.value) {
        cur = cur.left;
      } else if (target > cur.value) {
        cur = cur.right;
      } else {
        break;
      }
    }
    return closest;
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
      if (!leftNode && !rightNode) {
        return null;
      }
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }
      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }
    return root;
  }
}
