//every length of rod has a price, task is to cut a rod of a length into smaller pieces to maximize revenue
// i -> 1 to n
// pi -> price for all lengths
//rn -> max revenue for length n
//optimization problem with overlapping subproblem
//candidate for DP

//non DP solution

const cut_rod_non_dp = (p, n) => {
  if (n <= -1) return 0;
  let q = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i <= n; i++) {
    q = Math.max(q, p[i] + cut_rod_non_dp(p, n - i - 1));
  }
  return q;
};

const p = [1, 5, 8, 9, 10, 17, 17, 20, 24, 30];
console.log(cut_rod_non_dp(p, 4));

//using dynamic programming to keep the revenue already calculated in a memoized array r[n]
//top down -> memoization array
const p_memo = [1, 5, 8, 9, 10, 17, 17, 20, 24, 30];
const cut_rod_dp = (p, n, r) => {
  if (n <= -1) return 0;
  if (r[n]) return r[n];
  let q = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i <= n; i++) {
    q = Math.max(q, p[i] + cut_rod_non_dp(p, n - i - 1));
  }
  r[n] = q;
  return q;
};
let r = [];
console.log(cut_rod_dp(p_memo, 4, r));

//bottom up cut rod -> iterative solution

const bottom_up_cut_rod = (p, n) => {
  let rev = [];
  rev[-1] = 0;
  for (let j = 0; j <= n; j++) {
    let q = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i <= j; i++) {
      q = Math.max(q, p[i] + rev[j - i - 1]);
    }
    rev[j] = q;
  }
  return rev[n];
};

const p_bottom_up = [1, 5, 8, 9, 10, 17, 17, 20, 24, 30];
console.log(bottom_up_cut_rod(p_bottom_up, 3));
