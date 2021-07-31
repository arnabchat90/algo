/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s, start, end) {
  if (start < end) {
    let temp = s[start];
    s[start] = s[end];
    s[end] = temp;
    reverseString(s, start + 1, end - 1);
    return s;
  } else {
    return s;
  }
};

console.log(reverseString(["h", "e", "l", "l", "o"], 0, 4));
