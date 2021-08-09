//p - 10 20 30 40 50 60
const matrix_chain_multiplication_dp = (p) => {
  let n = p.length - 1;
  let m = new Array(n).fill(0).map(() => new Array(n).fill(0));
  let s = new Array(n).fill(0).map(() => new Array(n).fill(0));
  //gap array
  for (let g = 0; g < n; g++) {
    for (let i = 0, j = g; j < n; i++, j++) {
      //j denotes the end of the current chain length
      if (g == 0) {
        //no cost for only one array
        m[i][j] = 0;
      } else if (g == 1) {
        const tc = p[i] * p[j] * p[j + 1];
        m[i][j] = tc;
      } else {
        let q = Number.MAX_SAFE_INTEGER;
        m[i][j] = Number.MAX_SAFE_INTEGER;
        //when gap is greater than or equal 2
        //create the division in k and then check all division and take minimum
        for (let k = i; k < j; k++) {
          const lc = m[i][k];
          const rc = m[k + 1][j];
          const mc = p[i] * p[k + 1] * p[j + 1];
          const tc = lc + rc + mc;
          if (tc < q) {
            q = tc;
            //lowest cost, and the k value is stored
            m[i][j] = q;
            s[i][j] = k;
          }
        }
      }
    }
  }
  return { m, s };
};

const p = [30, 35, 15, 5, 10, 20, 25];
console.log(matrix_chain_multiplication_dp(p));
