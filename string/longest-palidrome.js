var longestPalindrome = function (s) {
  let len = 0,
    start = 0,
    end = 0,
    lenEven = 0,
    lenOdd = 0;
  //base cases
  if (s.length <= 1) return s;
  for (let i = 0; i < s.length; i++) {
    lenOdd = expandAroundCenter(s, i, i);
    lenEven = expandAroundCenter(s, i, i + 1);
    len = Math.max(lenOdd, lenEven);
    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }
  return s.substr(start, end - start + 1);
};

const expandAroundCenter = (s, i, j) => {
  while (i >= 0 && j < s.length && s.charAt(i) == s.charAt(j)) {
    i--;
    j++;
  }
  return j - 1 - i;
};

console.log(longestPalindrome("babad"));
