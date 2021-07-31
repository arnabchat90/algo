/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let rowStart = 0,
    rowEnd = n - 1,
    colStart = 0,
    colEnd = n - 1;
  let results = [];
  let count = 1;

  //base case
  if (n == 1) {
    return [[1]];
  }

  //spiral 4 loop solution
  while (rowStart <= rowEnd && colStart <= colEnd) {
    for (let i = colStart; i <= colEnd; i++) {
      if (results[rowStart] == undefined) results[rowStart] = [];
      results[rowStart][i] = count;
      count++;
    }
    rowStart++;
    for (let i = rowStart; i <= rowEnd; i++) {
      if (results[i] == undefined) results[i] = [];
      results[i][colEnd] = count;
      count++;
    }
    colEnd--;
    if (colStart <= colEnd) {
      for (let i = colEnd; i >= colStart; i--) {
        if (results[rowEnd] == undefined) results[rowEnd] = [];
        results[rowEnd][i] = count;
        count++;
      }
      rowEnd--;
    }
    if (rowStart <= rowEnd) {
      for (let i = rowEnd; i >= rowStart; i--) {
        if (results[i] == undefined) results[i] = [];
        results[i][colStart] = count;
        count++;
      }
      colStart++;
    }
  }
  return results;
};
