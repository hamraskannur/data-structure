function quickSort(arr) {
 if(arr.length<2){
    return arr
 }

 let pri=arr[arr.length-1]
 let left=[]
 let right=[]
 for (let i = 0; i < arr.length-1; i++) {
      if(arr[i]<pri){
        left.push(arr[i])
      }else{
        right.push(arr[i])
      }
 }
 return [...quickSort(left),pri,...quickSort(right)]
}



const arr = [9, 6, 4, 3, 2, 1];

console.log(quickSort(arr));
