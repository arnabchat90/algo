/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const m = board.length;
  const n = board[0].length;
  //search for first letter in the whole array;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] == word.charAt(0) && dfs(board, i, j, 0, word, m, n)) {
        return true;
      }
    }
  }
  return false;
};

const dfs = (board, i, j, count, word, m, n) => {
  if (count == word.length) return true;
  if (
    i < 0 ||
    i >= m ||
    j < 0 ||
    j >= n ||
    board[i][j] !== word.charAt(count)
  ) {
    return false;
  }
  //to remove backward loop;
  let temp = board[i][j];
  board[i][j] = "";
  const found =
    dfs(board, i + 1, j, count + 1, word, m, n) ||
    dfs(board, i - 1, j, count + 1, word, m, n) ||
    dfs(board, i, j + 1, count + 1, word, m, n) ||
    dfs(board, i, j - 1, count + 1, word, m, n);
  board[i][j] = temp;

  return found;
};

console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCCED"
  )
);
