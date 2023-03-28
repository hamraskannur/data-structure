// // (o(nlogn) wastcase o(n2)) (spase=logn)
// {function quickSort(arr) {
//     if (arr.length < 2) {
//       return arr;
//     }
//     let pivot = arr[arr.length - 1];
//     let left = [];
//     let right = [];
//     for (i = 0; i < arr.length - 1; i++) {
//       if (arr[i] < pivot) {
//         left.push(arr[i]);
//       } else {
//         right.push(arr[i]);
//       }
//     }
//     return [...quickSort(left), pivot, ...quickSort(right)]
//   }
//   const arr = ["A","d","C","A"]
//   console.log(quickSort(arr))}


function quickSort(arr){
  if(arr.length<2){
    return arr
  }
  let pivot=arr[arr.length-1]
  let left=[]
  let right=[]
  for (let i = 0; i < arr.length-1; i++) {
     if(arr[i]<pivot){
      left.push(arr[i])
     }else{
      right.push(arr[i])
     }
  }
  return [...quickSort(left),pivot,...quickSort(right)]
}
const arr = [9,6,4,3,2,1]
console.log(quickSort(arr))