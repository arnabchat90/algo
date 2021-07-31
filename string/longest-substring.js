/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  //use indexof in the substring
  let occuranceMap = {};
  let maxSize = 0;
  let l,
    r = 0;
  let n = s.length;
  while (r < n) {
    if (occuranceMap[s.charAt(r)] !== undefined) {
      l = Math.max(occuranceMap[s.charAt(r)] + 1, l);
    }
    occuranceMap[s.charAt(r)] = r;
    maxSize = Math.max(maxSize, r - l + 1);
    r++;
  }

  return maxSize;
};
console.log(lengthOfLongestSubstring("pwwkew"));
