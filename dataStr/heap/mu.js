class Heap {
    constructor(array) {
        if (array) {
            this.heap = array
        } else {
            this.heap = []
        }
        this.buildHeap()
    }
    buildHeap() {
        for (var i = this.parent(this.heap.length - 1); i >= 0; i--) {
            this.shiftDown(i)
        }
    }
    shiftDown(currentIndex) {
        const endIndex = this.heap.length - 1;
        let leftIndex = this.leftChild(currentIndex)
        while (leftIndex<=endIndex ){
            const rightIndex = this.rightChild(currentIndex)
            let indexToShift;
            if(rightIndex<=endIndex && this.heap[rightIndex]<this.heap[leftIndex]){
                indexToShift=rightIndex;
            }else{
                indexToShift=leftIndex;
            }
            if(this.heap[indexToShift]<this.heap[currentIndex]){
                this.swap(indexToShift,currentIndex);
                currentIndex = indexToShift;
                leftIndex = this.leftChild(currentIndex)
            }else{
                return           } 
        }
        // this.shiftUp(endIndex)
    }
    shiftUp(currentIndex){
        let parentIndex =  this.parent(currentIndex)
        while (currentIndex>0 && this.heap[parentIndex] > this.heap[currentIndex]){
            this.swap(currentIndex,parentIndex)
            currentIndex =  parentIndex;
            parentIndex = this.parent(currentIndex)
        }
    }
    peak() {
        if(this.heap.length > 0) {
            console.log(this.heap[0]) 
        }else{
            console.log("Heap is empty")
        }
    }
    remove() {
        this.swap(0,this.heap.length-1)
        this.heap.length = this.heap.length - 1    
        this.shiftDown(0)
    }
    insert(num) {
        this.heap[this.heap.length] = num
        this.shiftUp(this.heap.length-1) 
    }
    parent(i) {
        return parseInt((i - 1) / 2)
    }
    leftChild(i) {
        return i * 2 + 1
    }
    rightChild(i) {
        return i * 2 + 2
    }
    display() {
        for (var i = 0; i < this.heap.length; i++) {
            console.log(this.heap[i])
        }
    }
    swap(indexOne, indexTwo) {
        const temp=this.heap[indexOne]
        this.heap[indexOne] = this.heap[indexTwo]
        this.heap[indexTwo] = temp
    }
}
const array = [3,4,5,7,4,8,44,2,6,3,7,3,6,3,4]
const heap = new Heap(array);
// heap.insert(1)
// heap.insert(5)
// heap.insert(15)
// heap.display()
// heap.peak()
// heap.remove()
heap.display()


