function leftRotate(n, d, arr) {
  reverseArr(arr, 0, d - 1);
  reverseArr(arr, d, n - 1);
  reverseArr(arr, 0, n - 1);

  return arr;
}

function reverseArr(arr, start, end) {
  while (start < end) {
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

console.log(leftRotate(5, 4, [1, 2, 3, 4, 5]));
