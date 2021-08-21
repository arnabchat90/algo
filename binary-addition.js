/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 var addBinary = function(a, b) {
    let x = BigInt('0b' + a), y = BigInt('0b' + b);
    let answer, carry;
    console.log(x,y)
    while(y) {
        answer = x ^ y;
        carry = (x & y) << BigInt(1)
        x = answer;
        y = carry;
    }
    return x.toString(2)
};

addBinary( "11" , "1")