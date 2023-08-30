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

  if (largest != i) {
    let temp = arr[i];
    arr[i] = arr[largest];
    arr[largest] = temp;
    maxHeapify(arr, n, largest);
  }
}

function heapSort(arr) {
  for (let i = parseInt(arr.length / 2 - 1); i > 0; i--) {
    maxHeapify(arr, arr.length, i);
  }

  for (let i = arr.length-1; i > 0; i--) {
    let temp = arr[i];
    arr[i] = arr[0];
    arr[0] = temp;
    maxHeapify(arr,i, 0);
  }
}

const arr = [9, 6, 4, 3, 2, 1];
heapSort(arr);
console.log(arr);
