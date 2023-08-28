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

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function getten(arr, n, sum, selected) {
//   if (sum === 10 ) {
//       console.log(`Elements ${selected} ===  10`);
//     } else if (sum < 10 && selected.length < n) {
//     for (let i = 0; i < arr.length; i++) {
//       let takeArr = arr.slice(i + 1);
//       getten(takeArr, n, sum + arr[i], selected.concat(arr[i]));
//     }
//   }
// }
// let selected=[]
// getten(arr, arr.length-1, 0, selected);

// function newproblem(arr) {
//   let newarr = [];
//   let secon = [];
//   let num = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (num === arr[i]) {
//       newarr.push(arr[i]);
//     } else {
//       if (newarr.length > secon.length) {
//         secon = [];
//         secon = [...newarr];
//       }
//       newarr = [];
//       num = arr[i];
//       num--
//       i--
//     }
//     num++;
//   }
//   if (newarr.length > secon.length) {
//     secon = [];
//     secon = [...newarr];
//   }
//   return secon;
// }
// const arr = [1,2,3,4,5,7,8,9,10,11,12,14,15,16,17,18,19];
// console.log(newproblem(arr));

// function primeNumber(arr){
//   const newArr=[]
//      for(i=0;i<arr.length;i++){
//        if(arr[i]===1){
//         newArr.push(arr[i])
//        }
//       for(j=2;j<arr[i];j++){
//          if(arr[i] % j===0 ){
//           newArr.push(arr[i])
//           break
//          }
//       }
//      }
//  console.log(newArr.sort().reverse())
// }
// const arr=[1,2,3,4,5]
// primeNumber(arr)

// let array=[1,2,3,4,5,5,6,6]
// function newFunction1(num){
//     num--
//  for (let i = num; i < array.length-1; i++) {
//     array[i]=array[i+1]
//  }
// }
// newFunction1(2)
// console.log(array);

// const obj1 = {
//     name: "Mukhthar",
//     age: 22,
//     place: 'Calicut',
//     qualification: 'degree'
// }
// const obj2 = {
//     name: "Hamras",
//     age: 20,
//     place: 'Kannur'
// }
// const obj3 = {
//     name: "Nelson",
//     age: 21,
//     place: 'Omanoor'
// }
// const obj4 = {
//     name: "Salih",
//     age: 21,
//     place: 'Calicut'
// }

// const arr = [obj1, obj2, obj3, obj4]

// const result = {}

// for (let i = 0; i < arr.length; i++) {
//     for (let [key, value] of Object.entries(arr[i])) {
//         if (result[key]) {
//             const arr = []
//             if (typeof result[key] === 'object') {
//                 arr.push(...result[key])
//             } else {
//                 arr.push(result[key])
//             }
//             arr.push(value)
//             result[key] = arr
//         } else {
//             result[key] = value
//         }
//     }
// }

// console.log(result);

// function newfun(arr){
//    let hasTable={}
//    let num
//    let count=0
//   for (let i = 0; i < arr.length; i++) {
//        if(hasTable[arr[i]]){
//         hasTable[arr[i]]++
//        }else{
//         hasTable[arr[i]]=1
//        }
//        if(hasTable[arr[i]]>count){
//         count=hasTable[arr[i]]
//         num=arr[i]
//        }
//   }
//   console.log(num*count);
// }

// const arr=[1,2,2,2,2,6]

// newfun(arr)

// function newfun(arr) {
//   let firstNum = 0;
//   let seconLast = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > firstNum) {
//       if (seconLast < firstNum) {
//         seconLast = firstNum;
//       }
//       firstNum = arr[i];
//     } else if (arr[i] > seconLast) {
//       if (arr[i] !== firstNum) {
//         seconLast = arr[i];
//       }
//     }
//   }
//   console.log(firstNum, "seconLast", seconLast);
// }

// const arr = [1, 2, 8, 5, 6, 7, 9, 10, 9, 10, 11];

// newfun(arr);

// function newfun2() {
//   var str = "this is interview";

//   let hashTable = {};
//   let newStr = "";
//   for (let i = 0; i < str.length - 1; i++) {
//     if (hashTable[str[i]]) {
//     } else {
//       newStr = newStr + str[i];
//       hashTable[str[i]] = 1;
//     }
//   }

//   console.log(newStr);
// }

// // newfun2()

// function newfun2(limit) {
//   let num = 0;
//   let secNum = 0;
//   for (let i = 0; i < limit; i++) {
//     let sum = num + secNum;
//     console.log(sum);
//     if (i >1) {
//       num = secNum;
//       secNum = sum;
//     }
//     if (i == 0) {
//       secNum = 1;
//     }
//   }
// }

// newfun2(8);

// function newfun3(arr) {
//   let left = 0;
//   let right = arr.length - 1;
//   while (left < right) {
//     let mid = parseInt((left + right) / 2);
//     if (arr[mid] === 1 && arr[mid - 1] === 0) {
//       return mid;
//     } else if (arr[mid] === 0) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }
//   return -1;
// }
// console.log(newfun3([0, 0,1, 1, 1, 1, 1, 1]));

// function part(arr) {
//   let length = Math.ceil(arr.length / 3);
//   let arr1 = [];
//   for (let i = 0; i < 3; i++) {
//     let sum = 0;
//     for (let j = i*length ; j <i*length+length ; j++) {
//       if(arr[j]){
//         sum = sum + arr[j];
//       }
//     }
//     arr1.push(sum);
//   }
//   if(arr[1]===arr[2]===arr[3]){
//       return true
//   }
//     return false
// }

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,1,2,3,4];

// console.log(part(arr));

// function bina(arr) {
//   let large = 0;
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 1) {
//       count++;
//       if (large < count) {
//         large = count;
//       }
//     } else {
//       count = 0;
//     }
//   }
//   return large;
// }

// const arr = [0, 0, 1,1,1,1,1,1, 0, 0, 1, 1, 1];
// console.log(bina(arr));

function newfun(arr) {
  let index = -1;
  let count = 0;
  let changenum=null
  let num = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      num++;
    } else {
        count++;
        index = i ;
        changenum=num
        i--;
        num = arr[i + 1];
    }
  }
  if (count === 1) {
    console.log(index);
    arr[index] = changenum
    return arr;
  } else if (count === 0) {
    return true;
  } else {
    return false;
  }
}

const arr = [1, 2, 5];

console.log(newfun(arr));
