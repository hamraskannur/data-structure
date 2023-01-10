// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }
// class BinarySearchTree {
//   constructor() {
//     this.root = null;
//   }
//   isEmpty() {
//     return this.root === null;
//   }
//   insert(value) {
//     const newNode = Node(value);
//     if (this.isEmpty()) {
//       this.root = newNode;
//     } else {
//       this.insertNode(this.root, newNode);
//     }
//   }
//   insertNode(root,newNode){
//     if(root.value<newNode){
//        if(root.left===null){
//        root.left=newNode
//        }else{
//         this.insertNode(root.left,newNode)
//        }
//     }else{
//       if(root.right===null){
//         root.right=newNode
//         }else{
//          this.insertNode(root.right,newNode)
//         }
//     }
//   }


//   search(root,value){
//     if(root===null){
//       return false
//     }else{
//       if(root.value==value){
//         return true
//       }else if(root.value<value){
//            this.search(root.left,value)
//       }else if(root.value> value){
//      this.search(root.right,value)
//       }  
//       return false
//     }
// }

// preOrder(root){
//   console.log(root.value);
//   this.preOrder(root.left)
//  this.preOrder(root.right)
// }

// inOder(root){
//   this.inOder(root.left)
//   console.log(root.value)
//   this.inOder(root.right)
// }

// postOder(root){
//   this.inOder(root.left)
//   this.inOder(root.right)
//   console.log(root.value)
// }

// }





// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// class BinarySearchTree {
//   constructor() {
//     this.root = null;
//   }
//   isEmpty() {
//     return this.root === null;
//   }
//   insert(value) {
//     const newNode = Node(value);
//     if (this.isEmpty()) {
//       this.root = newNode;
//     } else {
//       this.insertNode(this.root, newNode);
//     }
//   }
//   insertNode(root, newNode) {
//     if (root.value < newNode) {
//       if (root.left === null) {
//         root.left = newNode;
//       } else {
//         this.insert(root.left, newNode);
//       }
//     } else {
//       if (root.left === null) {
//         root.left = newNode;
//       } else {
//         this.insert(root.left, newNode);
//       }
//     }
//   }
//   search(root,value){
//     if(!root){
//       return false
//     }else{
//       if(root.value===value){
//         return true
//       }else if(root.value<value){
//         this.search(root.left,value)
//       }else if(root.right>value){
//         this.search(root.right,value)
//       }
//     }
  
//   }
//   preOrder() {
//     console.log(this.root.value);
//     this.preOrder(this.root.left);
//     this.preOrder(this.root.right);
//   }
//   inOder(root) {
//     this.inOder(root.left);
//     console.log(root.value);
//     this.inOder(this.root.right);
//   }
//   postOder(root) {
//     this.postOder(root.left);
//     this.postOder(root.right);
//     console.log(root.value);
//   }

//   levelOrder(root) {
//     const queue = [];
//     queue.push(root);
//     while (queue.length) {
//       let curr = queue.shift;
//       if (curr.left) {
//         queue.push(curr.left);
//       }
//       if (curr.right) {
//         queue.push(curr.right);
//       }
//     }
//   }

//   min(root) {
//     if (!root.left) {
//       return root.value;
//     } else {
//       this.min(root.left);
//     }
//   }

//   max(root) {
//     if (!root.right) {
//       return root.value;
//     } else {
//       this.max(root.right);
//     }
//   }
//   delete(value) {
//     this.root = this.deleteNode(this.root, value);
//   }

//   deleteNode(root, value) {
//     if (root === null) {
//       return null;
//     }
//     if (value < root.value) {
//       root.left = this.deleteNode(root.left, value);
//     } else if (value > root.value) {
//       root.right = this.deleteNode(root.right, value);
//     } else {
//       if (!root.left && !root.right) {
//         return null;
//       }
//       if (!root.left) {
//         return root.right;
//       } else if (!root.right) {
//         return root.right;
//       }
//       root.value = this.min(root.right);
//       root.right = this.deleteNode(root.right, root.value);
//     }
//     return root;
//   }

//   isValidBST(root, min = null, max = null) {
//     if (!root) {
//       return true;
//     }

//     if (max != null && root.value > max) {
//       return false;
//     }
//     if (min != null && root.value < min) {
//       return false;
//     }

//     let leftSide = this.isValidBST(root, min, root.value);
//     let rightSide = this.isValidBST(root, root.value, max);
//     return leftSide && rightSide;
//   }

//   findClosestValue(root, target) {
//     let curr = root;
//     let closest = root.value;
//     while (curr != null) {
//       if (Math.abs(target - closest) > Math.abs(target - curr.value)) {
//         closest = curr.value;
//       }
//       if (target < curr.value) {
//         curr = curr.left;
//       } else if (target > curr.value) {
//         curr = curr.right;
//       } else {
//         break;
//       }
//     }
//     return closest;
//   }
// }

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// class BinarySearchTree {
//   constructor() {
//     this.root = null;
//   }
//   isEmpty() {
//     return this.root === null;
//   }

//   insert(value) {
//     const newNode = new Node(value);
//     if (this.isEmpty()) {
//       this.root = newNode;
//     } else {
//       this.insertNode(this.root, newNode);
//     }
//   }

//   insertNode(root, newNode) {
//     if (newNode.value < root.value) {
//       if (root.left === null) {
//         root.left = newNode;
//       } else {
//         this.insertNode(root.left, newNode);
//       }
//     } else {
//       if (root.right === null) {
//         root.right = newNode;
//       } else {
//         this.insertNode(root.right, newNode);
//       }
//     }
//   }
//   search(root, value) {
//     if (!root) {
//       return null;
//     } else {
//       if (root.value === value) {
//         return true;
//       } else if (value < root.value) {
//         return this.search(root.left, value);
//       } else {
//         return this.search(root.right, value);
//       }
//     }
//   }
//   preOrder(root) {
//     console.log(root.value);
//     this.preOrder(root.left);
//     this.preOrder(root.right);
//   }

//   inOder(root) {
//     this.inOder(root.left);
//     console.log(root.value);
//     this.inOder(root.right);
//   }

//   postOder(root) {
//     this.postOder(root.left);
//     this.postOder(root.right);
//     console.log(root.value);
//   }

//   levelOrder() {
//     const queue = [];
//     queue.push(this.root);
//     while (queue.length) {
//       let curr = queue.shift;
//       if (curr.left) {
//         queue.push(curr.left);
//       }
//       if (curr.right) {
//         queue.push(curr.value);
//       }
//     }
//   }
//   min(root) {
//     if (!root.left) {
//       return root.value;
//     } else {
//       return this.min(root.left);
//     }
//   }
//   max(root) {
//     if (!root.right) {
//       return root.value;
//     } else {
//       return this.max(root.right);
//     }
//   }

//   delete(value){
//     this.root=this.deleteNode(this.root,value)
//   }

//   deleteNode(root,value){
//     if(root==null){
//      return root
//     }
//     if(value<root.value){
//         root.left=this.deleteNode(this.left,value)
//     }else if(value>root.value){
//      root.right=this.deleteNode(this.right,value)
//     }else{
//       if(!root.left && root.right){
//        return null
//       }
//       if(!root.left){
//         return root.right
//       }else if(!root.right){
//         return root.left
//       }
//       root.value=this.min(this.right)
//       root.right=this.delete(root.right,root.value)
//     }
//     return root
//   }



//   delete(value) {
//     this.root = this.deleteNode(this.root, value);
//   }

//   deleteNode(root, value) {
//     if (root === null) {
//       return root;
//     }
//     if (value < root.value) {
//       root.left = this.deleteNode(root.left, value);
//     } else if (value > root.value) {
//       root.right = this.deleteNode(root.right, value);
//     } else {
//       if (!root.left && !root.right) {
//         return null;
//       }
//       if (!root.left) {
//         return root.right;
//       } else if (!root.right) {
//         return root.left;
//       }
//       root.value = this.min(root.right);
//       root.right = this.deleteNode(root.right, root.value);
//     }
//     return root;
//   }

//   isValidBST(root, min = null, max = null) {
//     if (!root) return true;
//     if (max !== null && root.node > max) {
//       return false;
//     }
//     if (min !== null && root.node < min) {
//       return false;
//     }

//     const leftSide = this.isValidBST(root.left, min, node.data);
//     const rightSide = this.isValidBST(root.right, node.data, max);
//     return leftSide && rightSide;
//   }

//   findClosestValue(root, target) {
//     let curr = root;
//     let closest = root.value;

//     while (curr != null) {
//       if (Math.abs(target - closest) > Math.abs(target - curr.value)) {
//         closest = curr.value;
//       }
//       if (target < curr.value) {
//         curr = curr.left;
//       } else if (target > curr.value) {
//         curr = curr.right;
//       } else {
//         break;
//       }
//     }
//     return closest;
//   }
// }

// const bst = new BinarySearchTree();

// bst.insert(1);
// bst.insert(5);
// bst.insert(1);
// bst.insert(3);
// bst.insert(7);
// console.log(bst.findClosestValue(bst.root, 15));
// console.log(bst.levelOrder());
// console.log(false);
// bst.levelOrder();

// bst.delete(10);

// bst.levelOrder();

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// class BinarySearchTree {
//   constructor() {
//     this.root = null;
//   }

//   isEmpty() {
//     return this.root === null;
//   }

//   insert(value) {
//     const newNode = new Node(value);

//     if (this.isEmpty()) {
//       this.root = newNode;
//     } else {
//       this.insertNode(this.root, newNode);
//     }
//   }

//   insertNode(root, newNode) {
//     if (newNode.value < root.value) {
//       if (root.left === null) {
//         root.left = newNode;
//       } else {
//         this.insertNode(root.left, newNode);
//       }
//     } else {
//       if (root.right === null) {
//         root.right = newNode;
//       } else {
//         this.insertNode(root.right, newNode);
//       }
//     }
//   }

//   search(root, value) {
//     if (!root) {
//       return false;
//     } else {
//       if (root.value === value) {
//         return true;
//       } else if (value < root.value) {
//         return this.search(root.left, value);
//       } else {
//         return this.search(root.right, value);
//       }
//     }
//   }

//   preOrder(root) {
//     if (root) {
//       console.log(root.value);
//       this.preOrder(root.left);
//       this.preOrder(root.right);
//     }
//   }

//   inOrder(root) {
//     if (root) {
//       this.inOrder(root.left);
//       console.log(root.value);
//       this.inOrder(root.right);
//     }
//   }
//   postOrder(root) {
//     if (root) {
//       this.postOrder(root.left);
//       this.postOrder(root.right);
//       console.log(root.value);
//     }
//   }
// }

// const bst = new BinarySearchTree();

// console.log("tree is empty", bst.isEmpty());

// bst.insert(10);
// bst.insert(5);
// bst.insert(15);
// bst.insert(3);
// bst.insert(7);
// console.log(bst.root);
// console.log(bst.root.value);

// console.log(bst.search(bst.root, 10));
// console.log(bst.search(bst.root, 5));
// console.log(bst.search(bst.root, 15));
// console.log(bst.search(bst.root, 55));
// bst.postOrder(bst.root);

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// class BinarySearchTree {
//   constructor() {
//     this.root = null;
//   }

//   isEmpty() {
//     return this.root === null;
//   }

//   insert(value) {
//     const newNode = new Node(value);

//     if (this.isEmpty()) {
//       this.root = newNode;
//     } else {
//       this.insertNode(this.root, newNode);
//     }
//   }

//   insertNode(root, newNode) {
//     if (newNode.value < root.value) {
//       if (root.left === null) {
//         root.left = newNode;
//       } else {
//         this.insertNode(root.left, newNode);
//       }
//     } else {
//       if (root.right === null) {
//         root.right = newNode;
//       } else {
//         this.insertNode(root.right, newNode);
//       }
//     }
//   }

//   search(root, value) {
//     if (!root) {
//       return false;
//     } else {
//       if (root.value === value) {
//         return true;
//       } else if (value < root.value) {
//         return this.search(root.left, value);
//       } else {
//         return this.search(root.right, value);
//       }
//     }
//   }

//   preOrder(root) {
//     if (root) {
//       console.log(root.value);
//       this.preOrder(root.left);
//       this.preOrder(root.right);
//     }
//   }

//   inOrder(root) {
//     if (root) {
//       this.inOrder(root.left);
//       console.log(root.value);
//       this.inOrder(root.right);
//     }
//   }
//   postOrder(root) {
//     if (root) {
//       this.postOrder(root.left);
//       this.postOrder(root.right);
//       console.log(root.value);
//     }
//   }

//   levelOrder() {
//     //use the optimized queue wat if implementation
//     const queue = [];
//     console.log(this.root, "level order");
//     queue.push(this.root);
//     while (queue.length) {
//       let curr = queue.shift();
//       console.log(curr.value);
//       if (curr.left) {
//         queue.push(curr.left);
//       }
//       if (curr.right) {
//         queue.push(curr.right);
//       }
//     }
//   }

//   min(root) {
//     if (!root.left) {
//       return root.value;
//     } else {
//       return this.min(root.left);
//     }
//   }

//   max(root) {
//     if (!root.right) {
//       return root.value;
//     } else {
//       return this.max(root.right);
//     }
//   }

//   delete(value) {
//     this.root = this.deleteNode(this.root, value);
//   }
//   deleteNode(root, value) {
//     if (root === null) {
//       return root;
//     }
//     if (value < root.value) {
//       root.left = this.deleteNode(root.left, value);
//     } else if (value > root.value) {
//       root.right = this.deleteNode(root.right, value);
//     } else {
//       if (!root.left && !root.right) {
//         return null;
//       }
//       if (!root.left) {
//         return root.right;
//       } else if (!root.right) {
//         return root.left;
//       }
//       root.value = this.min(root.right);
//       root.right = this.deleteNode(root.right, root.value);
//     }
//     return root;
//   }

//   delete(root, value) {
//     this.root = this.deleteNode;
//   }
//   deleteNode(root, value) {
//     if (root == null) {
//       return null;
//     }
//     if (value < root.value) {
//       root.left = this.deleteNode(root.left, value);
//     } else if (value > root.value) {
//       root.right = this.deleteNode(root.right, value);
//     } else {
//       if (root.left && root.right) {
//       }
//     }
//   }
// }

// const bst = new BinarySearchTree();

// console.log('tree is empty', bst.isEmpty());

// bst.insert(10)
// bst.insert(5)
// bst.insert(15)
// bst.insert(3)
// // bst.insert(7)

// console.log(bst.root);
// console.log(bst.root.value);
// console.log(bst.search(bst.root, 10));
// console.log(bst.search(bst.root, 5));
// console.log(bst.search(bst.root, 15));
// console.log(bst.search(bst.root, 55));

// // console.log(bst.min(bst.root));
// // console.log(bst.max(bst.root));

// bst.levelOrder()

// // bst.delete(3)

// // bst.levelOrder()

// bst.delete(10)

// bst.levelOrder()

// class Node {
//     constructor(data) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
//      }
//     }

//     class Tree {
//      constructor() {
//      this.root = null;
//     }

//   isValidBST(node, min = null, max = null) {
//   if (!node) return true;
//   if (max !== null && node.data >= max) {
//     return false;
//   }
//   if (min !== null && node.data <= min) {
//     return false;
//   }
//   const leftSide = this.isValidBST(node.left, min, node.data);
//   const rightSide = this.isValidBST(node.right, node.val, max);

//   return leftSide && rightSide;
//   }
// }

//     const t = new Node(10);
//     t.left = new Node(0);
//     t.left.left = new Node(7);
//     t.left.right = new Node(4);
//     t.right = new Node(12);
//     const t1 = new Tree();
//     t1.root = t;
//     console.log(t1.isValidBST(t));

// function findClosestValueInBst(root, target) {
//     let closest = root.value;
//   const traverse = (node) => {
//         if (node === null) return;
//         if (Math.abs(target - closest) > Math.abs(target - node.value)) {
//             closest = node.value;
//         }

//         if (target < node.value) {
//             console.log('left')
//             traverse(node.left)
//         } else {
//             console.log('right')
//             traverse(node.right)
//         }

//     }
//     traverse(root)
//     return closest;
// }

// class Node {
//   constructor(value) {
//       this.value = value
//       this.left = null
//       this.right = null
//   }
// }

// class BinarySearchTree {
//   constructor() {
//       this.root = null
//   }

//   isEmpty() {
//       return this.root === null
//   }

//   insert(value) {
//       const newNode = new Node(value)

//       if (this.isEmpty()) {
//           this.root = newNode
//       } else {
//           this.insertNode(this.root, newNode)
//       }
//   }

//   insertNode(root, newNode) {
//       if (newNode.value < root.value) {
//           if (root.left === null) {
//               root.left = newNode
//           } else {
//               this.insertNode(root.left, newNode)
//           }
//       } else {
//           if (root.right === null) {
//               root.right = newNode
//           } else {
//               this.insertNode(root.right, newNode)
//           }
//       }
//   }

//   search(root, value) {
//       if (!root) {
//           return false
//       } else {
//           if (root.value === value) {
//               return true
//           } else if (value < root.value) {
//               return this.search(root.left, value)
//           } else {
//               return this.search(root.right, value)
//           }
//       }
//   }

//   preOrder(root) {
//       if (root) {
//           console.log(root.value);
//           this.preOrder(root.left)
//           this.preOrder(root.right)
//       }
//   }

//   inOrder(root) {
//       if (root) {
//           this.inOrder(root.left)  
//           console.log(root.value);
//           this.inOrder(root.right)
//       }
//   }
//   postOrder(root) {
//       if (root) {
//           this.postOrder(root.left)
//           this.postOrder(root.right)
//           console.log(root.value);
//       }
//   }

//   levelOrder() {
//       //use the optimized queue wat if implementation
//       const queue = []
//       console.log(this.root, 'Level order');
//       queue.push(this.root)
//       while (queue.length) {
//           let curr = queue.shift()
//           console.log(curr.value);
//           if (curr.left) {
//               queue.push(curr.left)
//           }
//           if (curr.right) {
//               queue.push(curr.right)
//           }
//       }
//   }

//   min(root) {
//       if (!root.left) {
//           return root.value
//       } else {
//           return this.min(root.left)
//       }
//   }
//   max(root) {
//       if (!root.right) {
//           return root.value
//       } else {
//           return this.max(root.right)
//       }
//   }

//   delete(value) {
//       this.root = this.deleteNode(this.root, value)
//   }
//   deleteNode(root, value) {
//       if (root === null) {
//           return root
//       }
//       if (value < root.value) {
//           root.left = this.deleteNode(root.left, value)
//       } else if (value > root.value) {
//           root.right = this.deleteNode(root.right, value)
//       } else {
//           if (!root.left && !root.right) {
//               return null
//           }
//           if (!root.left) {
//               return root.right
//           }else if(!root.right){
//               return root.left
//           }
//           root.value=this.min(root.right)
//           root.right=this.deleteNode(root.right,root.value)
//       }
//       return root
//   }
// }

// const bst = new BinarySearchTree()

// console.log('tree is empty', bst.isEmpty());

// bst.insert(10)
// bst.insert(5)
// bst.insert(15)
// bst.insert(3)
// bst.insert(7)

// console.log(bst.root);
// console.log(bst.root.value);
// console.log(bst.search(bst.root, 10));
// console.log(bst.search(bst.root, 5));
// console.log(bst.search(bst.root, 15));
// console.log(bst.search(bst.root, 55));

// console.log(bst.min(bst.root));
// console.log(bst.max(bst.root));

// bst.levelOrder()

// bst.delete(3)

// bst.levelOrder()

// bst.delete(10)

// bst.levelOrder()

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.value.left = null;
//     this.value.right = null;
//   }
// }

// class BinarySearchTree {
//   constructor() {
//     root = null;
//   }

//   isEmpty() {
//     this.root === null;
//   }
//   insert(value) {
//     const newNode = new Node(value);
//     if (this.isEmpty) {
//       this.root = newNode;
//     } else {
//       this.insertNode(this.root, newNode);
//     }
//   }

//   insertNode(root, newNode) {
//     if (newNode.value < root.value) {
//       if (root.left === null) {
//         root.left = newNode;
//       } else {
//         this.insertNode(root.left, newNode);
//       }
//     } else {
//       if (root.right === null) {
//         root.right = newNode;
//       } else {
//         this.deleteNode(root.right, newNode);
//       }
//     }
//   }

//   search(root, value) {
//     if (!root) {
//       return null;
//     } else {
//       if (root.value === value) {
//         return value;
//       } else if (value < root.value) {
//         this.search(root.left, value);
//       } else {
//         this.search(root.right, value);
//       }
//     }
//   }
//   preOrder(root) {
//     console.log(root.value);
//     this.preOrder(root.left);
//     this.preOrder(root.right);
//   }
//   inOrder(root) {
//     this.inOrder(root.left);
//     console.log(root.value);
//     this.inOrder(root.right);
//   }
//   postOrder(root) {
//     this.postOrder(this.left);
//     this.postOrder(this.right);
//     console.log(this.value);
//   }

//   levelOrder() {
//     const queue = [];
//     queue.push(this.root);
//     while (queue.length) {
//       cur = queue.shift();
//       console.log(cur.value);
//       if (cur.left) {
//         queue.push(cur.left);
//       }
//       if (cur.right) {
//         queue.push(cur.right);
//       }
//     }
//   }

//   min(root) {
//     if (!root.left) {
//       return root.value;
//     } else {
//       this.min(root.left);
//     }
//   }
//   max(root) {
//     if (!root.right) {
//       return root, value;
//     } else {
//       this.max(root.right);
//     }
//   }

//   isValidBST(root, min = null, max = null) {
//     if (!root) {
//       return true;
//     }
//     if (max !== null && root.value >= max) {
//       return false;
//     }
//     if (min !== null && root.value <= min) {
//       return false;
//     }

//     const leftSide = this.isValidBST(root.left, min, root.value);
//     const rightSide = this.isValidBST(root.right, root.value, max);

//     return leftSide && rightSide;

//   }

//   findClosestValue(root, target) {
//     let cur = root;
//     closest = cur.value;
//     while (cur != null) {
//       if (Math.abs(closest - target) > Math.abs(cur.value - target)) {
//         closest = cur.value;
//       }
//       if (target < cur.value) {
//         cur = cur.left;
//       } else if (target > cur.value) {
//         cur = cur.right;
//       } else {
//         break;
//       }
//     }
//     return closest;
//   }

//   delete(value){
//      this.root=this.deleteNode(this.root,value)
//   }
//   deleteNode(root,value){
//     if(!root){
//       return null
//     }
//     if(value<root.value){
//       root.left= this.deleteNode(root.left,value)
//     }else if(value>root.value){
//       root.right=this.deleteNode(root.right,value)
//     }else{
//       if(!leftNode && !rightNode){
//         return null
//       }
//       if(!root.left){
//         return root.right
//       }else if(!root.right){
//         return root.left
//       }
//       root.value=this.min(root.right)
//       root.right=this.deleteNode(root.right,root.value)
//     }
//     return root

//   }

// }

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.value.left = null;
//     this.value.right = null;
//   }
// }

// class BinarySearchTree {
//   constructor() {
//     this.root = null;
//   }

//   isEmpty() {
//     return this.root === null;
//   }

//   insert(value) {
//     const newNode = new Node(value);
//     if (this.isEmpty()) {
//       this.root = newNode;
//     } else {
//       this.insertNode(this.root, newNode);
//     }
//   }

//   insertNode(root, newNode) {
//     if (newNode.value < root.value) {
//       if (root.left === null) {
//         root.left = newNode;
//       } else {
//         this.insertNode(root.left, newNode);
//       }
//     } else {
//       if (root.right === null) {
//         root.right = newNode;
//       } else {
//         this.insertNode(root.right, newNode);
//       }
//     }
//   }

//   search(root, value) {
//     if (!root) {
//       return null;
//     } else {
//       if (root.value === value) {
//         return true;
//       } else if (value < root.value) {
//         return this.search(root.left, value);
//       } else {
//         return this.search(root.right, value);
//       }
//     }
//   }

//   preOrder(root) {
//     console.log(root.value);
//     this.preOrder(root.left);
//     this.preOrder(root.right);
//   }
//   inOrder(root) {
//     this.preOrder(root.left);
//     console.log(root.value);
//     this.preOrder(root.right);
//   }
//   postOrder(root) {
//     this.preOrder(root.left);
//     this.preOrder(root.right);
//     console.log(root.value);
//   }

//   levelOrder() {
//     const queue = [];
//     queue.push(this.root);
//     while (queue.length) {
//       curr = queue.shift;
//       if (curr.left) {
//         queue.push(curr.left);
//       }
//       if (curr.right) {
//         queue.push(curr.right);
//       }
//     }
//   }

//   min(root) {
//     if (!root.left) {
//       return root.value;
//     } else {
//       return this.min(root.left);
//     }
//   }
//   max(root) {
//     if (!root.right) {
//       return root.right;
//     } else {
//       return this.max(root.right);
//     }
//   }

//   isValidBST(root, min = null, max = null) {
//     if (!root) return true;
//     if (max !== null && root.node > max) {
//       return false;
//     }
//     if (min !== null && root.node < min) {
//       return false;
//     }

//     const leftSide = this.isValidBST(root.left, min, node.data);
//     const rightSide = this.isValidBST(root.right, node.data, max);
//     return leftSide && rightSide;
//   }

//   findClosestValue(root, target) {
//     let curr = root;
//     let closest = root.value;
//     while (curr != null) {
//       if (
//         Math.abs(target - closest) > Math.abs(Math.abs(target - curr.value))
//       ) {
//         closest = root.value;
//       }

//       if (target < curr.value) {
//         curr = root.left;
//       } else if (target > curr.value) {
//         curr = root.right;
//       } else {
//         break;
//       }
//     }
//     return closest;
//   }

//   delete(value) {
//     this.root = this.deleteNode(this.root, value);
//   }

//   deleteNode(root, value) {
//     if (root === null) {
//       return null;
//     }
//     if (value < root.value) {
//       root.left = this.deleteNode(root.left, value);
//     } else if (value > root.value) {
//       root.right = this.deleteNode(root.right, value);
//     } else {
//       if (!root.left && !root.right) {
//         return null;
//       }
//       if (!root.left) {
//         return root.right;
//       }
//       if (!root.right) {
//         return root.left;
//       }
//       root.value = this.min(root.right);
//       root.right = this.deleteNode(root.right, root.value);
//     }
//   }
// }

// const bst = new BinarySearchTree();



class Node{
  constructor(value){
    this.value=value
    this.left=null
    this.right=null
  }
}

class BinarySearchTree{
  constructor(){
    this.root=null
  }
  isEmpty(){
    this.root===null
  }
  insert(value){
    const newNode=Node(value)
    if(this.isEmpty()){
      this.root=newNode
    }else{
     this.insertNode(this.root,value)
    }
    
  }
 delete(value){
  this.root=this.deleteNode(this.root,value)
 }

 deleteNode(root,value){
  if(root===null){
    return null
  }

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
    }
   if(!root.right){
      return root.left
    }
    root.value=this.min(root.right)
    root.right=this.deleteNode(root.right,root.value)
  }
  return root
 }
}