
class Queue {
    constructor() {
      this.items = [];
    }
    //  o(1)
    enqueue(element) {
      this.items.push(element);
    }
    // o(n)
    dequeue() {
      return this.items.shift();
    }
    isEmpty() {
      return this.items.length === 0;
    }
    peek() {
      if (!this.isEmpty()) {
        return this.items[0];
      }
      return null;
    }
    size() {
      return this.items.length;
    }
    print() {
      console.log(this.items);
      // console.log(this.items.toString());
    }
  }
  