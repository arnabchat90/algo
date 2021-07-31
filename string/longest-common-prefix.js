var longestCommonPrefix = function (strs) {
  let result = "";
  if (strs.length == 1) return strs[0];
  let charArr = strs[0].split("");
  let minCount = Number.MAX_SAFE_INTEGER;
  for (let i = 1; i < strs.length; i++) {
    let commonLettersCount = 0;
    for (let j = 0; j < strs[i].length; j++) {
      if (strs[i].charAt(j) == charArr[j]) {
        commonLettersCount++;
      } else {
        break;
      }
    }
    if (commonLettersCount < minCount) {
      minCount = commonLettersCount;
    }
  }
  for (let k = 0; k < minCount; k++) {
    result += charArr[k];
  }
  return result;
};
console.log(longestCommonPrefix([""]));
