/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    switch (s.charAt(i)) {
      case "(": {
        stack.push(")");
        break;
      }
      case "{": {
        stack.push("}");
        break;
      }
      case "[": {
        stack.push("]");
        break;
      }
      case ")": {
        const lastElement = stack.pop();
        if (lastElement != ")") return false;
        break;
      }
      case "}": {
        const lastElement = stack.pop();
        if (lastElement != "}") return false;
        break;
      }
      case "]": {
        const lastElement = stack.pop();
        if (lastElement != "]") return false;
        break;
      }
    }
  }
  if (stack.length == 0) return true;
  else return false;
};

console.log(isValid("([{])"));
