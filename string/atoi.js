/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  var count = 0;
  var resultString = "";
  var isPositive = true;
  var signAlreadyGiven = false;
  var isWhiteSpace = false;
  while (count < s.length) {
    var currentChar = s.charAt(count);
    if (currentChar == " " && resultString.length == 0 && !signAlreadyGiven) {
      isWhiteSpace = true;
    } else if (currentChar == "-" && resultString.length == 0) {
      isPositive = false;
      signAlreadyGiven = true;
    } else if (currentChar == "+" && resultString.length == 0) {
      isPositive = true;
      signAlreadyGiven = true;
    } else if (
      currentChar.charCodeAt(0) >= 48 &&
      currentChar.charCodeAt(0) < 58
    ) {
      //this is a digit
      resultString += currentChar;
    } else {
      //it is not a digit break immidiately
      break;
    }
    count++;
  }
  if (resultString.length == 0) return 0;
  const intResult = parseInt(resultString);
  if (intResult >= Math.pow(2, 31) && isPositive) {
    return Math.pow(2, 31) - 1;
  } else if (intResult < Math.pow(2, 31) && isPositive) return intResult;
  else if (intResult > Math.pow(2, 31) && !isPositive)
    return -1 * Math.pow(2, 31);
  else return -1 * intResult;
};

console.log(myAtoi("2147483648"));
