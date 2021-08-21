/**
 * @param {number} n
 * @return {string}
 */

 var codes = {
    "0" : "zero",
    "1" : "one",
    "2" : "two",
    "3" : "three",
    "4" : "four",
    "5" : "five",
    "6" : "six",
    "7" : "seven",
    "8" : "eight",
    "9" : "nine"
};
var reverseCodes = {
    "zero" : 0,
    "one" : 1,
    "two": 2,
    "three" : 3,
    "four" : 4,
    "five" : 5,
    "six" : 6,
    "seven" : 7,
    "eight" : 8,
    "nine" : 9
};

var countAndSay = function(n) {
    if(n == 1) return "1";
    const cs = countAndSay(n - 1);
    return say(cs);
};

const say = (n) => {
    //n is a string which we have to iterate and store the counts in a hashmap
   const countArr = [];
   for(let i = 0 ; i < n.length ; i++) {
       const ch = n.charAt(i);
       let count = 0, j = i;
       const obj = {};
       while(n[j + 1] == n[j]) {
           count++;
           j++;
           i++;
       }
       obj[codes[n[i]]] = count + 1;
       countArr.push(obj);
   }
   let resultStr = "";
   countArr.forEach(obj => {
       resultStr += obj[Object.keys(obj)[0]].toString() + reverseCodes[Object.keys(obj)[0]].toString()
   });
    return resultStr;
}

console.log(countAndSay(5));