// 1 fibonacci sequence

// function fibonacci(n){
//     let fib=[0,1]
//     for(i=2;i<n;i++){
//         fib[i]=fib[i-1]+fib[i-2]
//     }
//     return fib
// }

// console.log(fibonacci(2));
// console.log(fibonacci(3));
// console.log(fibonacci(7));


//Big-o=0(n)   fionacci

// 2 factorial

// function factorial(n){
//    let result=1
//    for(i=2;i<=n;i++){
//     result=result*i
//    }
//    return result
// }

// console.log(factorial(0));
// console.log(factorial(1));
// console.log(factorial(5));


//Big-O=O(n)  fact


// function isPrime(n){
//     if(n<2){
//         return false
//     }

//     for(i=2;i<n;i++){
//         if(n%i===0){
//             return false
//         }

//     }
//     return true


// }

// console.log(isPrime(2));
// console.log(isPrime(1));
// console.log(isPrime(5));
// console.log(isPrime(4));

// Big-o=O👎


// function isPrime(n){
//         if(n<2){
//             return false
//         }

//         for(i=2;i<Math.sqrt(n);i++){
//             if(n%i===0){
//                 return false
//             }

//         }
//         return true


//     }

//     console.log(isPrime(2));
//     console.log(isPrime(1));
//     console.log(isPrime(5));
//     console.log(isPrime(4));

// Big-o=O(sqrt(n))


//power of two


// function isPowerofTwo(n){
//     if(n<1){
//         return false
//     }

//     while(n>1){
//         if(n%2!=0){
//             return false
//         }
//         n=n/2
//     }
//     return true

// }


// console.log(isPowerofTwo(1));  //true
// console.log(isPowerofTwo(2));  //true
// console.log(isPowerofTwo(5));  //false

//Bif-O=O(logn)

//kili video workoit
// let x=[6,5,4,3,9,8,0]
// let y=10

//    function sumTwo(a,n){
//     for(i=0;i<a.length;i++){

//         for(j=1;j<a.length;j++){
//             if(a[i]+a[j]===n){

//                 return [a[i],a[j]]

//             }
//         }
//     }
//    }
// console.log(sumTwo(x,y));


//just do class and constructor concept in javascropt          1111
// class Stack{
//     constructor(){
//         this.items=[9,9]
//         console.log('jfhsdfjhdj');
//     }

//     print(){
//         console.log(this.items);
//     }
//     push(element){
//         this.items.push(element)
//         return this.items
//     }
// }

// const stack=new Stack
// console.log(stack.push(10));
// console.log(stack.push(10));

// console.log(stack.push(10));

// stack.print()
//                                                           1111


//    class Cars{
//     constructor(elememt){
//         this.value=elememt
//         console.log(this.value);
//     }
//    }

//    const car=new Cars(10)    //10



//linked lists

// class node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }


// class LinkeList{
//     constructor(){
//         this.head=null
//         this.size=0
//     }
//     isEmpty(){
//         return this.size == 0
//     }
//     getSize(){
//         return this.size
//     }
// }

// const list=new LinkeList

// console.log('list is empty',list.isEmpty());
// console.log('list size',list.getSize());

//output
//list is empty true
//list size 0


//2nd

// class Node{
//     constructor(){
//         this.value=this.value
//         this.next=null
//     }
// }

// class LinkeList{
//     constructor(){
//         this.head=null
//         this.size=0
//     }
//     isEmpty(){
//         return this.size===0
//     }
//     getSize(){
//        return this.size
//     }
//     //prepending for add one in first

//     prepend(value){
//      const node =new Node(value)
//     if(this.isEmpty()){
//        this.head=node
//        }else{
//         node.next=this.head
//        this.head=node
//        }
//        this.size++
//     }

//     print(){
//         if(this.isEmpty()){
//             console.log('kuist us empty');
//         }else{
//             let curr=this.head 
//             let listValues=''
//             while(curr){
//                 listValues+=`${curr.value}`
//             curr=curr.next
//             }
//             console.log(listValues);
//         }
//     }
// }



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

//     isEmpty() {
//         return this.size === 0
//     }

//     getSize() {
//         return this.size
//     }

//     prepend(value) {
//         const node = new Node(value)
//         if (this.isEmpty()) {
//             this.head = node
//         } else {
//             node.next = this.head
//             this.head = node

//         }
//         this.size++
//     }
//         print(){
//         if(this.isEmpty()){
//             console.log('kuist us empty');
//         }else{
//             let curr=this.head 
//             let listValues=''
//             while(curr){
//              listValues+=`${curr.value}`
//             curr=curr.next
//             }
//             console.log(listValues);
//         }
//     }

// }

// const list = new LinkeList

// console.log('list is empty', list.isEmpty());
// console.log('list size', list.getSize());
// list.print()
// list.prepend(10)
// list.print()
// list.prepend(20)
// list.prepend(30)
// list.print()

//output
// list is empty true
// list size 0
// kuist us empty
// 10
// 302010

//3   insert

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

//     isEmpty() {
//         return this.size === 0
//     }

//     getSize() {
//         return this.size
//     }

// //O(1)

    // prepend(value) {
    //     const node = new Node(value)
    //     if (this.isEmpty()) {
    //         this.head = node
    //     } else {
    //         node.next = this.head
    //         this.head = node

    //     }
    //     this.size++
    // }

//     // O👎

    // append(value){
    //     const node=new Node(value)
    //     if(this.isEmpty()){
    //         this.head=node
    //     }else{
    //         let prev=this.head
    //         while(prev.next){
    //             prev=prev.next
    //         }
    //         prev.next=node
    //     }
    //     this.size++
    // }

    // insert(value,index){
    //     if(index<0 || index>this.size){
    //         return
    //     }
    //     if(index===0){
    //         this.prepend(value)
    //     }else{
    //         const node=new Node(value)
    //         let prev=this.head
    //         for(let i=0;i<index-1;i++){
    //             prev=prev.next
    //         }
    //    node.next=prev.next
    //    prev.next=node
    // this.size++
    //     }
    // }

//     print(){
//         if(this.isEmpty()){
//             console.log('kuist us empty');
//         }else{
//             let curr=this.head 
//             let listValues=''
//             while(curr){
//                 listValues+=`${curr.value}`
//             curr=curr.next
//             }
//             console.log(listValues);
//         }
//     }
// }

// const list = new LinkeList

// console.log('list is empty', list.isEmpty());
// console.log('list size', list.getSize());
// list.print()
// list.insert(10,0)
// list.print()
// list.insert(20,0)
// list.print()
// list.insert(30,1)
// list.print()
// list.insert(40,2)
// list.print()
// console.log(list.getSize());


//output
// list is empty true
// list size 0
// kuist us empty
// 10
// 2010
// 203010
// 20304010
// 4



//4 remove

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

//     isEmpty() {
//         return this.size === 0
//     }

//     getSize() {
//         return this.size
//     }

//     //O(1)

//     prepend(value) {
//         const node = new Node(value)
//         if (this.isEmpty()) {
//             this.head = node
//         } else {
//             node.next = this.head
//             this.head = node

//         }
//         this.size++
//     }

//     // O👎

//     append(value) {
//         const node = new Node(value)
//         if (this.isEmpty()) {
//             this.head = node
//         } else {
//             let prev = this.head
//             while (prev.next) {
//                 prev = prev.next
//             }
//             prev.next = node
//         }
//         this.size++
//     }

//     insert(value, index) {
//         if (index < 0 || index > this.size) {
//             return
//         }
//         if (index === 0) {
//             this.prepend(value)
//         } else {
//             const node = new Node(value)
//             let prev = this.head
//             for (let i = 0; i < index - 1; i++) {
//                 prev = prev.next
//             }
//             node.next = prev.next
//             prev.next = node
//             this.size++
//         }
//     }

//     removeFrom(index){
//         if(index<0 || index>this.size){
//             return null
//         }
//         let removeNode
//         if(index===0){
//             removeNode=this.head
//             this.head=this.head.next
//         }else{
//             let prev=this.head
//             for(let i=0;i<index-1;i++){
//                 prev=prev.next
//             }
//             removeNode=prev.next
//             prev.next=removeNode.next 
//         }
//         this.size--
//         return removeNode.value
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

// const list = new LinkeList

// console.log('list is empty', list.isEmpty());
// console.log('list size', list.getSize());
// list.print()
// list.insert(10, 0)
// list.print()
// list.insert(20, 0)
// list.print()
// list.insert(30, 1)
// list.print()
// list.insert(40, 2)
// list.print()
// console.log(list.getSize());


// console.log(list.removeFrom(10));
// console.log(list.removeFrom(0));
// list.print()

// console.log(list.removeFrom(1));
// list.print()


//output

// list is empty true
// list size 0
// kuist us empty
// 10
// 2010
// 203010
// 20304010
// 4
// null
// 20
// 304010
// 40
// 3010


//remove base on value


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

//     isEmpty() {
//         return this.size === 0
//     }

//     getSize() {
//         return this.size
//     }

//     //O(1)

//     prepend(value) {
//         const node = new Node(value)
//         if (this.isEmpty()) {
//             this.head = node
//         } else {
//             node.next = this.head
//             this.head = node

//         }
//         this.size++
//     }

//     // O👎

//     append(value) {
//         const node = new Node(value)
//         if (this.isEmpty()) {
//             this.head = node
//         } else {
//             let prev = this.head
//             while (prev.next) {
//                 prev = prev.next
//             }
//             prev.next = node
//         }
//         this.size++
//     }

//     insert(value, index) {
//         if (index < 0 || index > this.size) {
//             return
//         }
//         if (index === 0) {
//             this.prepend(value)
//         } else {
//             const node = new Node(value)
//             let prev = this.head
//             for (let i = 0; i < index - 1; i++) {
//                 prev = prev.next
//             }
//             node.next = prev.next
//             prev.next = node
//             this.size++
//         }
//     }

    // removeFrom(index){
    //     if(index<0 || index>this.size){
    //         return null
    //     }
    //     let removeNode
    //     if(index===0){
    //         removeNode=this.head
    //         this.head=this.head.next
    //     }else{
    //         let prev=this.head
    //         for(let i=0;i<index-1;i++){
    //             prev=prev.next
    //         }
    //         removeNode=prev.next
    //         prev.next=removeNode.next 
    //     }
    //     this.size--
    //     return removeNode.value
    // }

    // removeValue(value){
    //     if(this.isEmpty()){
    //         return null
    //     }
        
    //     if(this.head.value===value){
    //          this.head=this.head.next
    //          this.size--
    //          return value
    //     }else{
    //         let prev=this.head
    //         while(prev.next && prev.next.value!==value){
    //             prev=prev.next
    //         }
    //         if(prev.next){
    //            let removeNode=prev.next
    //             prev.next=removeNode.next
    //             this.size--
    //             return value
    //         }
    //         return null
    //     }
    // }

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

// const list = new LinkeList

// console.log('list is empty', list.isEmpty());
// console.log('list size', list.getSize());
// list.print()
// list.insert(10, 0)
// list.print()
// list.insert(20, 0)
// list.print()
// list.insert(30, 1)
// list.print()
// list.insert(40, 2)
// list.print()
// console.log(list.getSize());

// console.log(list.removeValue(40));
// list.print()
// console.log(list.removeValue(20));
// list.print()



//search linked list

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

//     isEmpty() {
//         return this.size === 0
//     }

//     getSize() {
//         return this.size
//     }

//     //O(1)

//     prepend(value) {
//         const node = new Node(value)
//         if (this.isEmpty()) {
//             this.head = node
//         } else {
//             node.next = this.head
//             this.head = node

//         }
//         this.size++
//     }

//     // O👎

//     append(value) {
//         const node = new Node(value)
//         if (this.isEmpty()) {
//             this.head = node
//         } else {
//             let prev = this.head
//             while (prev.next) {
//                 prev = prev.next
//             }
//             prev.next = node
//         }
//         this.size++
//     }

//     insert(value, index) {
//         if (index < 0 || index > this.size) {
//             return
//         }
//         if (index === 0) {
//             this.prepend(value)
//         } else {
//             const node = new Node(value)
//             let prev = this.head
//             for (let i = 0; i < index - 1; i++) {
//                 prev = prev.next
//             }
//             node.next = prev.next
//             prev.next = node
//             this.size++
//         }
//     }

//     removeFrom(index){
//         if(index<0 || index>this.size){
//             return null
//         }
//         let removeNode
//         if(index===0){
//             removeNode=this.head
//             this.head=this.head.next
//         }else{
//             let prev=this.head
//             for(let i=0;i<index-1;i++){
//                 prev=prev.next
//             }
//             removeNode=prev.next
//             prev.next=removeNode.next 
//         }
//         this.size--
//         return removeNode.value
//     }

//     removeValue(value){
//         if(this.isEmpty()){
//             return null
//         }
        
//         if(this.head.value===value){
//              this.head=this.head.next
//              this.size--
//              return value
//         }else{
//             let prev=this.head
//             while(prev.next && prev.next.value!==value){
//                 prev=prev.next
//             }
//             if(prev.next){
//                let removeNode=prev.next
//                 prev.next=removeNode.next
//                 this.size--
//                 return value
//             }
//             return null
//         }
//     }

//     search(value){
//         if(this.isEmpty()){
//             return -1
//         }
//         let i=0
//         let curr=this.head
//         while(curr){
//             if(curr.value===value){
//                 return i
//             }
//             curr=curr.next
//             i++
//         }
//         return -1
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

// const list = new LinkeList

// console.log('list is empty', list.isEmpty());
// console.log('list size', list.getSize());
// list.print()
// list.insert(10, 0)
// list.print()
// list.insert(20, 0)
// list.print()
// list.insert(30, 1)
// list.print()
// list.insert(40, 2)
// list.print()
// console.log(list.getSize());

// console.log(list.search(60));
// console.log(list.search(40));

//otput

// list is empty true
// list size 0
// kuist us empty
// 10
// 2010
// 203010
// 20304010
// 4
// -1
// 2



//5   REVERSE


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

//     isEmpty() {
//         return this.size === 0
//     }

//     getSize() {
//         return this.size
//     }

//     //O(1)

//     prepend(value) {
//         const node = new Node(value)
//         if (this.isEmpty()) {
//             this.head = node
//         } else {
//             node.next = this.head
//             this.head = node
//         }
//         this.size++
//     }

//     // O👎

//     append(value) {
//         const node = new Node(value)
//         if (this.isEmpty()) {
//             this.head = node
//         } else {
//             let prev = this.head
//             while (prev.next) {
//                 prev = prev.next
//             }
//             prev.next = node
//         }
//         this.size++
//     }

//     insert(value, index) {
//         if (index < 0 || index > this.size) {
//             return
//         }
//         if (index === 0) {
//             this.prepend(value)
//         } else {
//             const node = new Node(value)
//             let prev = this.head
//             for (let i = 0; i < index - 1; i++) {
//                 prev = prev.next
//             }
//             node.next = prev.next
//             prev.next = node
//             this.size++
//         }
//     }

//     removeFrom(index){
//         if(index<0 || index>this.size){
//             return null
//         }
//         let removeNode
//         if(index===0){
//             removeNode=this.head
//             this.head=this.head.next
//         }else{
//             let prev=this.head
//             for(let i=0;i<index-1;i++){
//                 prev=prev.next
//             }
//             removeNode=prev.next
//             prev.next=removeNode.next 
//         }
//         this.size--
//         return removeNode.value
//     }

//     removeValue(value){
//         if(this.isEmpty()){
//             return null
//         }
        
//         if(this.head.value===value){
//              this.head=this.head.next
//              this.size--
//              return value
//         }else{
//             let prev=this.head
//             while(prev.next && prev.next.value!==value){
//                 prev=prev.next
//             }
//             if(prev.next){
//                let removeNode=prev.next
//                 prev.next=removeNode.next
//                 this.size--
//                 return value
//             }
//             return null
//         }
//     }

//     search(value){
//         if(this.isEmpty()){
//             return -1
//         }
//         let i=0
//         let curr=this.head
//         while(curr){
//             if(curr.value===value){
//                 return i
//             }
//             curr=curr.next
//             i++
//         }
//         return -1
//     }

    // reverse(){
    //     let prev=null
    //     let curr=this.head
    //     while(curr){
    //         let next=curr.next
    //         curr.next=prev
    //         prev=curr
    //         curr=next
    //     }
    //     this.head=prev
    // }

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

// const list = new LinkeList

// console.log('list is empty', list.isEmpty());
// console.log('list size', list.getSize());
// list.print()
// list.insert(10, 0)
// list.print()
// list.insert(20, 0)
// list.print()
// list.insert(30, 1)
// list.print()
// list.insert(40, 2)
// list.print()


// list.reverse()
// list.print()

// OUTPUT

// list is empty true
// list size 0
// kuist us empty
// 10
// 2010
// 203010
// 20304010
// 10403020



//* linked list with tail *//

// class Node {
//     constructor(value) {
//         this.value = value
//         this.next = null
//         this.tail=null
//     }
// }

// class LinkeList {
//     constructor() {
//         this.head = null
//         this.size = 0
//     }

//     isEmpty() {
//         return this.size === 0
//     }

//     getSize() {
//         return this.size
//     }

//     //O(1)

//     prepend(value) {
//        const node=new Node(value)
//        if(this.isEmpty()){
//         this.head=node
//         this.tail=node
//        }else{
//         node.next=this.head
//         this.head=node
//        }
//        this.size++
//     }

//     // O👎

//     append(value) {
//         const node=new Node(value)
//         if(this.isEmpty()){
//             this.head=node
//             this.tail=node
//         }else{
//             this.tail.next=node
//             this.tail=node
//         }
//         this.size++
//     }

//     insert(value, index) {
//         if (index < 0 || index > this.size) {
//             return
//         }
//         if (index === 0) {
//             this.prepend(value)
//         } else {
//             const node = new Node(value)
//             let prev = this.head
//             for (let i = 0; i < index - 1; i++) {
//                 prev = prev.next
//             }
//             node.next = prev.next
//             prev.next = node
//             this.size++
//         }
//     }

//     removeFromfrond(){
//       if(this.isEmpty()){
//         return null
//       }
//       const value=this.head.value
//       this.head=this.head.next
//       this.size--
//       return value
//     }

//     removeValueend(){
//      if(this.isEmpty()){
//         return null
//      }
//      const value=this.tail.value
//      if(this.size==1){
//         this.head=null
//         this.tail=null
//      }else{
//         let prev=this.head
//         while(prev.next!=this.tail){
//             prev=prev.next
//         }
//         prev.next=null
//         this.tail=prev
//      }
//      this.size-- 
//     }

//     search(value){
//         if(this.isEmpty()){
//             return -1
//         }
//         let i=0
//         let curr=this.head
//         while(curr){
//             if(curr.value===value){
//                 return i
//             }
//             curr=curr.next
//             i++
//         }
//         return -1
//     }

//     reverse(){
//         let prev=null
//         let curr=this.head
//         while(curr){
//             let next=curr.next
//             curr.next=prev
//             prev=curr
//             curr=next
//         }
//         this.head=prev
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

// const list = new LinkeList

// console.log('list is empty', list.isEmpty());
// console.log('list size', list.getSize());
// list.print()


// list.append(1)
// list.append(2)
// list.append(3)
// list.prepend(0)
// list.print()
// console.log('size',list.getSize());

//otput

// list is empty true
// list size 0
// kuist us empty
// 0123
// size 4


// for (let i= 0; i < this.size; i++) {
//     prev=this.Head.value
//     while (prev) {
//        sum= sum+prev
//        count++
//         prev=prev.next
//     }
// }