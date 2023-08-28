{
  const arr = [1, 25, 10, 8, 8, 89, 5];

  function bubbleSort(arr) {
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;
        }
      }
    } while (swapped);
    return arr;
  }
  console.log(bubbleSort(arr));
}

{
  const arr = [1, 25, 10, 8, 8, 89, 5];

  function insertSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      const element = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > element) {
        arr[j + 1] = arr[j];
        j = j - 1;
      }
      arr[j + 1] = element;
    }
    return arr;
  }
  console.log(insertSort(arr));
}
{
  const arr = [1, 25, 10, 8, 8, 89, 5];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        if(arr[i]<arr[j]){
            let temp=arr[i]
            arr[i]=arr[j]
            arr[j]=temp
        }
    }
  }
  console.log(arr);
}
