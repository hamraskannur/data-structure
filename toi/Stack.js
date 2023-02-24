class Node {
  constructor(value) {
    this.value = value;
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
  push(value) {
    const node = new Node(value);
    if (this.isEmpty) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.head.value;
    (this.head = this.head), next;
    this.size--;
  }

  peek() {
    return this.head.value;
  }
  print() {
    if (this.isEmpty()) {
      return null;
    } else {
        let curr =this.head
        let listValues=''
        while(curr){
            listValues+=curr.value
            curr=curr.next
        }
        console.log(listValues);
    }
  }
}
const stack = new LinkeList

console.log(stack.isEmpty());

stack.push(10)
stack.push(20)
stack.push(30)
console.log(stack.isEmpty())
console.log(stack.getsize())
stack.print()
console.log(stack.pop())