
class BinaryHeap {
    constructor() {
      this.list = [];
    }
  
    minHeapIfy(arr, n, i) {
      smallest = i;
      l = i * 2 + 1;
      r = i * 2 + 2;
      if (l < n && arr[l] < arr[smallest]) {
        smallest = l;
      }
      if (r < n && arr[r] < arr[smallest]) {
        smallest = r;
      }
      if (smallest != i) {
        let temp = arr[i];  
        arr[i] = arr[smallest];
        arr[smallest] = temp;
        this.minHeapIfy(arr, n, smallest);
      }
    }
  
    insert=(num)=>{
      size=this.list.length
      if(size){
        this.list.push(num)
      }else{
        this.list.push(num)
        for (let i = parseInt(this.list.length/2-1); i >=0; i++) {
           this.minHeapIfy(this.list,this.list.length,i)
        }
      }
    }
      
    delete=(num)=>{
        size=this.list.length
        let i
        for (i = 0; i < size; i++) {
           if(num === array[i]){
             break
           }        
        }
        [this.list[i],this.list[size-1]]=[this.list[size-1],this.list[size]]
  
         this.list.splice(size-1)
      for (let i = parseInt(this.list.length/2-1); i >=0; i--) {
          this.minHeapIfy(this.list,this.list.length,i)      
      }
    }
  }
  