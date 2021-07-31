var longestPalindrome = function (s) {
  var arrayWithMiddleCenters = new Array(2 * s.length + 1);
  for (let i = 0; i < arrayWithMiddleCenters.length; i++) {
    arrayWithMiddleCenters[i] = i % 2 == 0 ? "#" : s[Math.floor(i / 2)];
  }
  var T = arrayWithMiddleCenters;
  var P = Array.from(T, (x) => 0);
  var C = 0;
  var R = 0;
  for (let i = 1; i < T.length - 1; i++) {
    let mirr = 2 * C - i;
    if (i < R) {
      //i is still inside the right boundary
      P[i] = Math.min(R - i, P[mirr]);
    }
    while (
      T[i + (1 + P[i])] == T[i - (1 + P[i])] &&
      i + (1 + P[i]) <= T.length &&
      i - (1 + P[i]) >= 0
    )
      P[i]++;
    //update right boundary & center
    if (i + P[i] > R) {
      C = i;
      R = i + P[i];
    }
  }
  //find the highest length palidrome center;
  let highestIndex = 0,
    max = 0;
  P.forEach((x, i) => {
    if (x > max) {
      max = x;
      highestIndex = i;
    }
  });

  const end =
    highestIndex % 2 == 0
      ? Math.floor(highestIndex + Math.ceil(P[highestIndex] / 2)) + 1
      : Math.floor(highestIndex + Math.ceil(P[highestIndex] / 2));
  const start =
    highestIndex % 2 == 0
      ? Math.floor(highestIndex - Math.ceil(P[highestIndex] / 2)) - 1
      : Math.floor(highestIndex - Math.ceil(P[highestIndex] / 2));
  var result = "";

  for (let i = start; i <= end; i++) {
    if (T[i] !== "#") result += T[i];
  }
  return result;
};

console.log(longestPalindrome("aaaa"));
