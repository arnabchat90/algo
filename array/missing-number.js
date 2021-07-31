class Solution {
  Swap(a, i, j) {
    let temp = a[i];
    a[i] = a[j];
    a[j] = temp;
  }
  MissingNumber(array, n) {
    //code here
    for (let i = 0; i < array.length; i++) {
      let oneBasedIndex = i + 1;
      if (array[i] == oneBasedIndex) i++;
      //not equal
      else {
        if (array[i] > array.length) {
          continue;
        }
        this.Swap(array, i, array[i] - 1);
        i--;
      }
    }
    for (let i = 0; i < array.length; i++) {
      let oneBasedIndex = i + 1;
      if (array[i] != oneBasedIndex) return oneBasedIndex;
      if (i == array.length - 1) return oneBasedIndex + 1;
    }
    return -1;
  }
}

console.log(new Solution().MissingNumber([1, 2], 2));
