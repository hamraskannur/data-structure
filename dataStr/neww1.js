const arr = [2, 4, 5, 7, 1, 2, 3, 0, 9, 8, 1, 2, 3];

function sortArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        let temb = arr[i];
        arr[i] = arr[j];
        arr[j] = temb;
      }
    }
  }
  return arr;
}

// console.log(sortArr(arr));

function revStr(str) {
  let newStr = "";
  for (let i = str.length - 1; i > 0; i--) {
    newStr += str[i];
  }

  return newStr;
}
let str = "Welcome to this interview";

// console.log(revStr(str));

// console.log(1<2<3);
// // true
// console.log(3>2>1);
//

// function Check(num) {
//   let newArr = [];
//   for (let i = 0; i < num; i++) {
//     let curNumber = i.toString();
//     let flag = true;
//     for (let j = 0; j < curNumber.length; j++) {
//       let oneNumber = curNumber[j] % 10;
//       if (oneNumber % 2 === 0) {
//         flag = false;
//       }
//     }
//     if (!flag) {
//       newArr.push(+curNumber);
//     }
//   }
//   return newArr;
// }

// console.log(Check(100));

// {let arr=["banna","apple","bus" ,"car","bike","nobody"]
// let newArr=arr.slice(2,5)

// console.log(newArr);
// }

// let arr=["banna","apple","bus" ,"car","bike","nobody","pppp"]
// const newArr=arr.splice(2,5)
// console.log(newArr);
// console.log(arr);

// const numbers = [1, 2, 3, 4, 5];

// // Removing elements
// const removed = numbers.splice(2, 2); // Removes elements at index 2 and 3
// console.log(removed); // Output: [3, 4]
// console.log(numbers); // Output: [1, 2, 5]

// // Adding elements
// numbers.splice(2, 0, 6, 7); // Inserts 6 and 7 at index 2
// console.log(numbers); // Output: [1, 2, 6, 7, 5]

// // Replacing elements
// numbers.splice(3, 1, 8, 9); // Replaces element at index 3 with 8 and 9
// console.log(numbers); // Output: [1, 2, 6, 8, 9, 5]
