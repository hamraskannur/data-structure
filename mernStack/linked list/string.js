// class _Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.size = 0;
//   }


//   append(value) {
//     const newNode = new _Node(value);

//     if (!this.head) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }
//     this.size++;
//   }

//   prepend(value) {
//     const newNode = new _Node(value);
//     newNode.next = this.head;
//     this.head = newNode;
//     if (!this.tail) {
//       this.tail = newNode;
//     }
//     this.size++;
//   }

//   search(data) {
//     let cur = this.head;
//     while (cur) {
//       if (cur.data === data) {
//         return cur;
//       }
//       cur = cur.next;
//     }
//     return null;
//   }

//   delete(data) {
//     if (!this.head) return;
//     if (this.head.data === data) {
//       this.head = this.head.next;
//       if (!this.head) {
//         this.tail = null;
//       }
//       return;
//     }
//     let cur = this.head;
//     while (cur.next) {
//       if (cur.next.data === data) {
//         cur.next = cur.next.next;
//         if (!cur.next) {
//           this.tail = cur;
//         }

//         return;
//       }
//       cur = cur.next;
//     }
//   }

//   sum() {
//     let length = this.size;
//     let curr = this.head;
//     let sum = 0;
//     let i = 0;
//     while (curr) {
//       if (i > length / 2 - 2 && i < length / 2 + 1) {
//         sum += curr.data;
//       }
//       curr = curr.next;
//       i++;
//     }
//     console.log(sum);
//   }
// }

// const list = new LinkedList();

// list.append(3);
// list.append(2);
// list.append(3);

// list.append(10);
// list.append(3);
// list.append(1);

// list.append(1);
// list.append(1);
// list.append(1);
// list.sum();


