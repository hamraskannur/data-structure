class Node {
  constructor(value) {
    this.Node = value;
    this.next = null;
  }
}

class LinkeList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  enqueue(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let cur = this.head;
      while (cur) {
        cur = cur.next; 
      }
      cur.next=node
    }
    this.size--
  }
  dequeue(){
    if(this.isEmpty()){
     return null
    }else{
       const value=this.head.value
       this.head=this.head.next
       this.size--
       return value
    }
  }


  print(){
    if(this.isEmpty()){
     console.log('kuist us empty');
    }else{
    let cur=this.head
    let listValues=""
    while(cur){
       listValues+=cur.value
    }
    console.log(listValues);
    }
  }
}
const queue = new LinkeList

console.log(queue.isEmpty());

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.print()
console.log(queue.dequeue());