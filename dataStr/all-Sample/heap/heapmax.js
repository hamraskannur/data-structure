
// Social networks

class BinaryHeap{
    constructor(){
        this.list=[]
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

//    o(logn)
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
  }

//    o(logn)

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
  }
}


