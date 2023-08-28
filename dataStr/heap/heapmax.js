class BinaryHeap {
  constructor() {
    this.list = [];
  }

  maxHeapIfy = (arr, n, i) => {
    let largest = i;
    let l = 2 * i + 1;
    let r = 2 * i + 2;

    if (l < n && arr[l] > arr[largest]) {
      largest = l;
    }

    if (r < n && arr[r] > arr[largest]) {
      largest = r;
    }
    //    If smallest is not root
    if (largest != i) {
      let temp = arr[i];
      arr[i] = arr[largest];
      arr[largest] = temp;

      // Recursively heapIfy the affected sub-tree
      this.maxHeapIfy(arr, n, largest);
    }
  };

  //Insert Value
  insert = (num) => {
    const size = this.list.length;
    if (size === 0) {
      this.list.push(num);
    } else {
      this.list.push(num);

      //HeapIfy
      for (let i = parseInt(this.list.length / 2 - 1); i >= 0; i--) {
        this.maxHeapIfy(this.list, this.list.length, i);
      }
    }
  };

  //Remove value
  delete = (num) => {
    const size = this.list.length;
    //Get the index of the number to be removed
    let i;
    for (i = 0; i < size; i++) {
      if (num === this.list[i]) {
        break;
      }
    }

    //Swap the number with last element
    [this.list[i], this.list[size - 1]] = [this.list[size - 1], this.list[i]];

    //Remove the last element
    this.list.splice(size - 1);

    //HeapIfy the list again
    for (let i = parseInt(this.list.length / 2 - 1); i >= 0; i--) {
      this.maxHeapIfy(this.list, this.list.length, i);
    }
  };

  //Return max value
  findMax = () => this.list[0];
  //Remove max val
  deleteMax = () => {
    this.delete(this.list[0]);
  };

  //Remove and return max value
  extractMax = () => {
    const max = this.list[0];
    this.delete(max);
    return max;
  };
  //Size
  size = () => this.list.length;

  //IsEmpty
  isEmpty = () => this.list.length === 0;

  //Return head
  getList = () => this.list;
}

const heap = new BinaryHeap();
heap.insert(3);
heap.insert(4);
heap.insert(9);
heap.insert(5);
heap.insert(2);

console.log(heap.getList());

heap.delete(9);
console.log(heap.getList());

heap.insert(7);
console.log(heap.getList());

// // Output:
// // [ 9, 5, 4, 3, 2 ]
// // [ 5, 3, 4, 2 ]
// // [ 7, 5, 4, 2, 3 ]

// class BinaryHeap {
//   constructor() {
//     this.list = [];
//   }
//   maxHeapIfy = (arr, n, i) => {
//     let largest = i;
//     l = i * 2 + 1;
//     r = i * 2 + 2;

//     if (l < n && arr[l] > arr[largest]) {
//       largest = l;
//     }

//     if (r < n && arr[r] > arr[largest]) {
//       largest = r;
//     }
//     if (largest != i) {
//       let temp = arr[largest];
//       arr[largest] = arr[i];
//       arr[i] = temp;
//       this.maxHeapIfy(this.list, this.list.length, largest);
//     }
//   };

//   insert = (num) => {
//     size = this.list.length;
//     if (size === 0) {
//       this.list.push(num);
//     } else {
//       this.list.push(num);

//       for (let i = parseInt(this.list.length / 2 - 1); i >= 0; i--) {
//         this.maxHeapIfy(this.list, this.list.length, i);
//       }
//     }
//   };

//   delete = (value) => {
//     const size = this.list.size;
//     let i;
//     for (let i = 0; i < size; i++) {
//       if (value === this.list[i]) {
//         break;
//       }
//     }

//     [this.list[size - 1], this.list[i]] = [this.list[i], this.list[size - 1]];
//     this.list.splice(size - 1);
//     for (let i = parseInt(this.list.length / 2 - 1); i >= 0; i++) {
//       this.maxHeapIfy(this.list, this.list.length, i);
//     }
//   };
// }

// class BinaryHeap {
//   constructor() {
//     this.list = [];
//   }
//   maxHeapIfy = (arr, n, i) => {
//     largest = i;
//     l = 2 * i + 1;
//     r = 2 * i + 2;
//     if (l < n && arr[l] > arr[largest]) {
//       largest = l;
//     }
//     if (r < n && arr[r] > arr[largest]) {
//       largest = l;
//     }
//     if (largest != i) {
//       let temp = arr[i];
//       arr[i] = arr[l];
//       arr[l] = temp;
//       this.maxHeapIfy(arr, n, largest);
//     }
//   };
//   insert = (value) => {
//     size = this.list.length;
//     if (size === 0) {
//       this.list.push(value);
//     } else {
//       this.list.push(value);
//       for (let i = parent(this.list.length / 2 - 1); i < array.length; i++) {
//         this.maxHeapIfy(this.list, this.list.length, i);
//       }
//     }
//   };

//   delete = (value) => {
//     size = this.list.length;
//     let i;
//     for (i = 0; i < this.list.length; i++) {
//       if (value === this.list[i]) {
//         break;
//       }
//     }
//     [this.list[size - 1], this.list[i]] = [this.list[i], this.list[size - 1]];
//     this.list.splice(size - 1);
//     for (let i = parseInt(this.list.length / 2 - 1); i >= 0; i++) {
//       this.maxHeapIfy(this.list, this.list.length, i);
//     }
//   };
// }

// let arr = [2, 5, 7, 9, 8, 4];
// for (let i = arr.length / 2 - 1; i >= 0; i--) {
//   maxHeapify(arr, arr.length, i);
// }

// function maxHeapify(arr, n, i) {
//   let largest = i;
//   let l = 2 * i + 1;
//   let r = 2 * i + 2;

//   if (l < n && arr[l] > arr[largest]) {
//     largest = l;
//   }
//   if (r < n && arr[r] > arr[largest]) {
//     largest = r;
//   }

//   if (largest != i) {
//     let temp = arr[i];
//     arr[i] = arr[largest];
//     arr[largest] = temp;
//     maxHeapify(arr, n, largest);
//   }
// }
// console.log(arr);

class BinaryHeap {
  constructor() {
    this.list;
  }
  completeTree=(arr)=>{
   
    heap=(arr,i)=>{
      r=i*2+1
      l=i*2+2
      if(arr[r]){

      }
      if(arr[l]){
        
      }
    }
    for (let i = parseInt(arr.length/2-1); i >=0; i++) {
      heap(arr,i)
    }
    
  }

  checkHeap = (arr) => {

    l = 2 * i + 1;
    r = 2 * i + 2;
    for (let i = 0; i < arr.length; i++) {
      if(arr[0]>arr[l]){
        
      }
      if(arr[0]<arr[l]){
 
      }
    }

  };

}
