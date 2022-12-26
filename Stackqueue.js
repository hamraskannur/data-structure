
                                                          // Stack

// class Node {
//     constructor(value) {
//         this.value = value
//         this.next = null
//     }
// }

// class LinkeList {
//     constructor() {
//         this.head = null
//         this.size = 0
//     }
//     push(value) {
//         const node = new Node(value)
//         if (this.isEmpty()) {
//             this.head = node
//         } else {
//             node.next = this.head
//             this.head = node
//         }
//         this.size++
//     }
//     pop() {
//         if (this.isEmpty()) {
//             return null
//         }
//         const value = this.head.value
//         this.head = this.head.next
//         this.size--
//         return value
//     }


//     peek() {
//         return this.head.value
//     }

//     isEmpty() {
//         return this.size === 0

//     }

//     getsize() {
//         return this.size

//     }
//     print() {
//         if (this.isEmpty()) {
//             console.log('kuist us empty');
//         } else {
//             let curr = this.head
//             let listValues = ''
//             while (curr) {
//                 listValues += `${curr.value}`
//                 curr = curr.next
//             }
//             console.log(listValues);
//         }
//     }
// }

// const stack = new LinkeList

// console.log(stack.isEmpty());

// stack.push(10)
// stack.push(20)
// stack.push(30)
// console.log(stack.isEmpty())
// console.log(stack.getsize())
// stack.print()
// console.log(stack.pop())

                                                          //  queue



// class Node {
//     constructor(value) {
//         this.value = value
//         this.next = null
//     }
// }

// class LinkeList {
//     constructor() {
//         this.head = null
//         this.size = 0
//     }
//     enqueue(value) {
//         const node=new Node(value)
//         if(this.isEmpty()){
//             this.head=node
//         }else{
//             let prev=this.head
//             while(prev.next){
//                 prev=prev.next
//             }
//             prev.next=node
//         }
//         this.size++
//     }
//     dequeue() {
//         if(this.isEmpty()){
//          return null
//         }
//         const value=this.head.value
//         this.head=this.head.next
//         this.size--
//         return value

//     }

//     peek() {
//         return this.head.value
//     }

//     isEmpty() {
//         return this.size === 0

//     }

//     getsize() {
//         return this.size

//     }
//     print() {
//         if (this.isEmpty()) {
//             console.log('kuist us empty');
//         } else {
//             let curr = this.head
//             let listValues = ''
//             while (curr) {
//                 listValues += `${curr.value}`
//                 curr = curr.next
//             }
//             console.log(listValues);
//         }
//     }
// }

// const queue = new LinkeList

// console.log(queue.isEmpty());

// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.print()
// console.log(queue.dequeue());

