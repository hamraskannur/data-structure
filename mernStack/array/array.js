{
  const arr = [1, 10, 2, 3, 3, 4, 5, 6, 6, 10];
  const Unique = [];
  let hashTable = {};

  for (let i = 0; i < arr.length; i++) {
    if (hashTable[arr[i]]) {
      hashTable[arr[i]]++;
    } else {
      hashTable[arr[i]] = 1;
    }
  }
  for (const iterator in hashTable) {
    if (hashTable[iterator] === 1) {
      Unique.push(iterator);
    }
  }

  //   console.log(Unique);
}
