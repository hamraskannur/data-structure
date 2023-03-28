// on(logn)
function maxHeapify(arr, n, i) {
  let largest = i;
  let l = 2 * i + 1;
  let r = 2 * i + 2;

  if (l < n && arr[l] > arr[largest]) {
    largest = l;
  }
  if (r < n && arr[r] > arr[largest]) {
    largest = r;
  }
  if (i != largest) {
    let temp = arr[i];
    arr[i] = arr[largest];
    arr[largest] = temp;
    maxHeapify(arr, n, largest);
  }
}

function heapSort(arr, n) {
  for (i = parseInt(n / 2 - 1); i >= 0; i--) {
    maxHeapify(arr, n, i);
  }
  for (i = n - 1; i >= 0; i--) {
    let temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;
    maxHeapify(arr, i, 0);
  }
}
const arr = [8, 20, 2, 4, 6,77777777777777777];
heapSort(arr, arr.length);
console.log(arr);


