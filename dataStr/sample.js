// {
//   function isPrime(num) {
//     if (num <= 1) {
//       return false;
//     }

//     for (let i = 2; i < num; i++) {
//       if (num % i === 0) {
//         return false;
//       }
//     }

//     return true;
//   }

//   console.log(isPrime(9));
// }

{
  function findRepeatedElements(arr) {
    const hashTable = {};
    const repeatedElements = [];

    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];

      if (hashTable[element]) {
        repeatedElements.push(element);
      } else {
        hashTable[element] = true;
      }
    }

    return repeatedElements;
  }
  const arr = [1, 2, 3, 4, 5, 2, 3, 4];
  const repeatedElements = findRepeatedElements(arr);
  console.log(repeatedElements); // Output: [2, 3, 4]
}


