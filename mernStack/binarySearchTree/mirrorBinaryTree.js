class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function mirrorBinaryTree(root) {
    if (root === null) {
      return null;
    }
  
    // Swap the left and right subtrees
    const temp = root.left;
    root.left = root.right;
    root.right = temp;
  
    // Recursively mirror the left and right subtrees
    mirrorBinaryTree(root.left);
    mirrorBinaryTree(root.right);
  
    return root;
  }
  
  // Helper function to print the tree in-order
  function inOrderTraversal(root) {
    if (root !== null) {
      inOrderTraversal(root.left);
      console.log(root.value);
      inOrderTraversal(root.right);
    }
  }
  
  // Example binary tree
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  
  console.log("Original Tree (In-Order Traversal):");
  inOrderTraversal(root);
  
  mirrorBinaryTree(root);
  
  console.log("Mirror Tree (In-Order Traversal):");
  inOrderTraversal(root);
  