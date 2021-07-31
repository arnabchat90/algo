/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (s.length == 1 || numRows == 1) return s;
  var res = new Array(numRows);
  let currentRow = 0,
    startRow = 0,
    count = 0,
    endRow = numRows - 1,
    currentCol = 0;
  while (count < s.length) {
    //downward movement
    while (currentRow <= endRow) {
      res[currentRow] = res[currentRow] || [];
      res[currentRow][currentCol] = s.charAt(count);
      count++;
      currentRow++;
    }
    currentRow--;
    //diagonal movement
    while (currentRow > startRow) {
      currentCol++;
      currentRow--;
      res[currentRow][currentCol] = s.charAt(count);
      count++;
    }
    currentRow++;
  }
  var resultString = "";
  for (let i = 0; i < res.length; i++) {
    for (let j = 0; j < res[i].length; j++) {
      if (res[i][j] !== undefined) resultString += res[i][j];
    }
  }
  return resultString;
};

console.log(convert("AB", 1));
