function countingSort(arr, k) {
  const c = Array.from(new Array(k + 1), () => 0);
  const b = Array.from(new Array(arr.length), () => 0);
  console.log(c);
  for (let i = 0; i < arr.length; i++) {
    c[arr[i]] = c[arr[i]] + 1;
  }
  for (let i = 1; i <= k; i++) {
    c[i] += c[i - 1];
  }

  for (let i = 0; i < arr.length; i++) {
    b[c[arr[i]] - 1] = arr[i];
    c[arr[i]] -= 1;
  }
  return b;
}

console.log(countingSort([2, 5, 3, 1, 2, 3, 1, 3], 5));
