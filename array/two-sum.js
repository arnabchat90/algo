class Solution {
  hasArrayTwoCandidates(arr, n, x) {
    //code here
    //two sum problem
    //keep a hash map of complements
    //x is the sum
    //check number
    let hashMap = {};
    for (let i = 0; i < n; i++) {
      var complement = x - arr[i];
      if (complement < 0) continue;
      if (hashMap[complement] === undefined) {
        hashMap[arr[i]] = complement;
      } else {
        //console.log(hashMap[complement], hashMap)
        return "Yes";
      }
    }
    return "No";
  }
}

console.log(
  new Solution().hasArrayTwoCandidates(
    [
      335,
      501,
      170,
      725,
      479,
      359,
      963,
      465,
      706,
      146,
      282,
      828,
      962,
      492,
      996,
      943,
      828,
      437,
      392,
      605,
      903,
      154,
      293,
      383,
      422,
      717,
      719,
      896,
      448,
      727,
      772,
      539,
      870,
      913,
      668,
      300,
      36,
      895,
      704,
      812,
      323,
      334,
    ],
    42,
    468
  )
);
