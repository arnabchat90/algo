var isPalindrome = function (s) {
  var alphanumeric = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
  let isPalindrome = true;
  for (let i = 0; i <= Math.floor(alphanumeric.length / 2); i++) {
    if (
      alphanumeric.charAt(i) !==
      alphanumeric.charAt(alphanumeric.length - i - 1)
    ) {
      isPalindrome = false;
      return isPalindrome;
    }
  }
  return isPalindrome;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
