/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  //initialization
  let left = 0,
    rows = matrix.length,
    cols = rows !== 0 ? matrix[0].length : 0;
  let right = rows * cols - 1;
  //base case
  // []
  if (matrix.length == 0) {
    return false;
  }
  // [[]]
  if (matrix[0].length == 0) return false;
  //binary search the target, and calculate mid and row col index
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const rowIdx = Math.floor(mid / cols);
    const colIdx = mid % cols;
    if (target == matrix[rowIdx][colIdx]) {
      return true;
    } else if (target < matrix[rowIdx][colIdx]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return false;
};

const matrix = [[1, 2]];
const target = 2;

console.log(searchMatrix(matrix, target));
