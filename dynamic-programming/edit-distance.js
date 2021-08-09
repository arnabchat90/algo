/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (x, y) {
  const m = x.length;
  const n = y.length;
  return min_distance_recursive(x, y, m - 1, n - 1);
};

const minDistance_dp = (x, y) => {
  const m = new Array(x.length + 1)
    .fill(0)
    .map(() => new Array(y.length + 1).fill(0));
  for (let i = 0; i <= x.length; i++) {
    m[i][0] = i;
  }
  for (let i = 0; i <= y.length; i++) {
    m[0][i] = i;
  }
  for (let i = 1; i <= x.length; i++) {
    for (let j = 1; j <= y.length; j++) {
      if (x.charAt(i - 1) == y.charAt(j - 1)) {
        m[i][j] = m[i - 1][j - 1];
      } else {
        m[i][j] = Math.min(m[i - 1][j - 1], m[i][j - 1], m[i - 1][j]) + 1;
      }
    }
  }
  return m[x.length][y.length];
};

const min_distance_recursive = (x, y, m, n) => {
  if (m == -1) return n + 1;
  if (n == -1) return m + 1;
  if (x.charAt(m) == y.charAt(n)) {
    return min_distance_recursive(x, y, m - 1, n - 1);
  } else {
    return (
      Math.min(
        min_distance_recursive(x, y, m - 1, n - 1),
        min_distance_recursive(x, y, m, n - 1),
        min_distance_recursive(x, y, m - 1, n)
      ) + 1
    );
  }
};

const x = "";
const y = "a";

console.log(minDistance(x, y));
console.log(minDistance_dp(x, y));
