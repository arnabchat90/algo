const lcs_dp = (A, B) => {
  //two d matrix for saving the results for lower computation => bottom up approach
  const m = new Array(A.length + 1)
    .fill(0)
    .map(() => new Array(B.length + 1).fill(0));
  for (let i = 1; i <= A.length; i++) {
    for (let j = 1; j <= B.length; j++) {
      if (A.charAt(i) == B.charAt(j)) {
        m[i][j] = m[i - 1][j - 1] + 1;
      } else if (m[i - 1][j] >= m[i][j - 1]) {
        m[i][j] = m[i - 1][j];
      } else m[i][j] = m[i][j - 1];
    }
  }
  return m[A.length][B.length];
};

const lcs_recursive = (A, B, i, j) => {
  if (i == -1 || j == -1) return 0;
  if (i == 0 || j == 0) return 0;
  if (A.charAt(i) == B.charAt(j)) {
    return lcs_recursive(A, B, i - 1, j - 1) + 1;
  } else {
    return Math.max(
      lcs_recursive(A, B, i, j - 1),
      lcs_recursive(A, B, i - 1, j)
    );
  }
};

const find_lcs = (A, B) => {
  const m = A.length;
  const n = B.length;
  return lcs_recursive(A, B, m, n);
};

const A = "BDCABA";
const B = "ABCBDAB";
console.log(find_lcs(A, B));

console.log(lcs_dp(A, B));
