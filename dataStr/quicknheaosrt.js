{
  console.log('bubble sort');
  function bubbleSort(arr) {
      for (i = 0; i < arr.length; i++) {
          for (j = 0; j < arr.length - 1 - i; j++) {
              if (arr[j] > arr[j + 1]) {
                  let temp = arr[j]
                  arr[j] = arr[j + 1]
                  arr[j + 1] = temp
              }
          }
      }
  }
  const arr = [8, 20, -2, 4, -6]
  bubbleSort(arr)
  console.log(arr);
}

{
  console.log('insertion sort');

  function insertionSort(arr) {
      for (i = 1; i < arr.length; i++) {
          let numbertoinsert = arr[i]
          let j = i - 1
          while (j >= 0 && arr[j] > numbertoinsert) {
              arr[j + 1] = arr[j]
              j = j - 1
          }
          arr[j + 1] = numbertoinsert
      }
  }
  const arr = [8, 20, -2, 4, -6]
  insertionSort(arr)

  console.log(arr);
}

{
  console.log('selection sort');

  function selectionSort(arr) {
      for (i = 0; i < arr.length; i++) {
          for (j = i + 1; j < arr.length; j++) {
              if (arr[i] > arr[j]) {
                  let temp = arr[i]
                  arr[i] = arr[j]
                  arr[j] = temp
              }
          }

      }
  }
  const arr = [8, 20, -2, 4, -6]
  selectionSort(arr)

  console.log(arr);
}
