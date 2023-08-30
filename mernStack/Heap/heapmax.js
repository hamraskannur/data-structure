class BinaryHeap {
  constructor() {
    this.list = [];
  }

  heapfly(arr, n, i) {
    let largest = i;
    let l = 2 * i + 1;
    let r = 2 * i + 2;
    if (l < n && arr[l] > arr[largest]) {
      largest = l;
    }
    if (r < n && arr[r] > arr[largest]) {
      largest = r;
    }
    if (largest != i) {
      let temp = arr[i];
      arr[i] = arr[largest];
      arr[largest] = temp;
      heapfly(arr, n, largest);
    }
  }

  insert(val) {
    let size = this.list.length;
    if (size === 0) {
      this.list.push(val);
    } else {
      this.list.push(val);

      for (let i = parseInt(this.list.length / 2); i > 0; i--) {
        this.maxHeapIfy(this.list, this.list.length, i);
      }
    }
  }


  delete(val){
    let size=this.list.length
    let i
    for (i = 0; i < size; i++) {
        if(val===this.list[i]){
            break
        }
    }

    [this.list[i],this.list[size-1]]=[this.list[size-1],this.list[i]]
    this.list.splice(size-1)

    for(let i=parseInt(this.list.length/2);i>=0 ;i--){
        this.maxHeapIfy(this.list,this.list.length,i)
    }

  }
}
