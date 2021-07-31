// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function is_Palindrome(str1) {
  var rev = str1
    .split("")
    .reverse()
    .join("");
  return str1 == rev;
}
function is_Prime(num1) {
  if (num1 == 0 || num1 == 1) {
    return "NO";
  } else {
    for (var k = 2; k <= num1 / 2; k++) {
      if (num1 % k == 0) {
        return "NO";
      }
    }
  }
  return "YES";
}

function longest_palindrome(str1) {
  var max_length = 0,
    maxp = "";

  for (var i = 0; i < str1.length; i++) {
    var subs = str1.substr(i, str1.length);

    for (var j = subs.length; j >= 0; j--) {
      var sub_subs_str = subs.substr(0, j);
      if (sub_subs_str.length <= 1) continue;

      if (is_Palindrome(sub_subs_str)) {
        if (sub_subs_str.length > max_length) {
          max_length = sub_subs_str.length;
          maxp = sub_subs_str;
        }
      }
    }
  }
  return maxp;
}

function solution(S) {
  return is_Prime(longest_palindrome(S).length);
}

console.log(solution());
