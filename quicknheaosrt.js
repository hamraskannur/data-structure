const swap = (arr, left, right) =>  {
    const temp = arr[left]
    arr[left] = arr[right]
    arr[right] = temp;
  }
  const partitionLow = (arr, low, high) => {
    //Pick the first element as pivot
    let pivot = arr[low];
    let i = low;
    
    //Partition the array into two parts using the pivot
    for(let j = low; j <= high; j++){
      if(arr[j] <= pivot){ 
        swap(arr, i, j);
        i++;
      }
    }
    
    swap(arr, i - 1, low);
    
    //Return the pivot index
    return i - 1;
  }
  
  const quicksort = (arr, low, high) => {
      // base condition
      if (low >= high) {
        return;
      }
  
      // rearrange the elements across pivot
      const pivot = partitionLow(arr, low, high);
  
      // recur on sub-array containing elements less than pivot
      quicksort(arr, low, pivot - 1);
  
      // recur on sub-array containing elements more than pivot
      quicksort(arr, pivot + 1, high);
  }
//   Input:
  // let arr = [10, 7, 8, 9, 1, 5];
  quickSort(arr, 0, arr.length - 1);
  console.log(arr);
  
  Output:
  [1, 5, 7, 8, 9, 10]


  const minHeapify = (arr, n, i) => {
    let smallest = i;
    let l = 2 * i + 1; //left child index
    let r = 2 * i + 2; //right child index
    
    //If left child is smaller than root
     if (l < n && arr[l] < arr[smallest]) {
              smallest = l; 
     }
    
     // If right child is smaller than smallest so far 
     if (r < n && arr[r] < arr[smallest]) {
          smallest = r; 
     }
    
     // If smallest is not root 
     if (smallest != i) { 
          let temp = arr[i]; 
          arr[i] = arr[smallest]; 
          arr[smallest] = temp; 
    
        // Recursively heapify the affected sub-tree 
        minHeapify(arr, n, smallest); 
      } 
  }
  
   // main function to do heap sort 
   const heapSort = (arr, n) => { 
       // Build heap (rearrange array) 
       for (let i = parseInt(n / 2 - 1); i >= 0; i--) {
           minHeapify(arr, n, i); 
       }
    
       // One by one extract an element from heap 
       for (let i = n - 1; i >= 0; i--) { 
          // Move current root to end 
          let temp = arr[0]; 
          arr[0] = arr[i]; 
          arr[i] = temp; 
    
          // call max heapify on the reduced heap 
          minHeapify(arr, i, 0); 
       } 
   }

//    Input:
const arr = [4, 6, 3, 2, 9];
heapSort(arr, arr.length);
console.log(arr);

Output:
[9, 6, 4, 3, 2]







