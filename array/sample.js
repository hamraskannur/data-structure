// find repeate elememt in array
// {function repeatedElements(arr){
//     let hashTable={}
//     let repeatedElements=[]
//     for (let i = 0; i < arr.length; i++) {
//         let elememt=arr[i]
//      if(hashTable[elememt]){
//         repeatedElements.push(elememt)
//      }else{
//         hashTable[elememt]=1
//      }
//     }
//     return repeatedElements
// }
// const arr = [1, 2, 3, 4, 5, 2, 3, 4];
// const num = repeatedElements(arr);
// console.log(num)}


// find prime number in array
// function primeNumber(arr){
//     let primeNumbers=[]
//     for (let i = 0; i < arr.length; i++) {
//         let flag =true
//         for (let j = 2; j < arr[i]; j++) {
//              if(arr[i]% j ===0 ){
//                 flag =false
//             }            
//         }
//         if(flag){
//             primeNumbers.push(arr[i])
//         }
//     }
//     return primeNumbers
// }


// const arr = [1, 2, 3, 4, 5, 2, 3, 4];
// const num = primeNumber(arr);
// console.log(num)


 // prints the first 10 numbers in the Fibonacci series
// function fibonacci(num) {
//     var a = 0, b = 1, result = 1;
//     console.log(a);
//     console.log(b);
//     for (var i = 2; i <= num; i++) {
//       result = a + b;
//       a = b;
//       b = result;
//       console.log(result);
//     }
//   }
  
//   fibonacci(10);
  