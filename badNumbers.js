function goodSegment(badNumbers, l, r) {
    // Write your code here
    let sortedArr = badNumbers.sort((a,b) => a - b);
    let differenceArr = [];
    let count = 0;
    let max = 0;
    for(let i=l;i <=r;i++) {
        if(!sortedArr.find((c) => c== i)) {
            count++;
            continue;
        }
        else {
            if(max < count) {
                max = count;
            }
            count = 0;
            continue;
        }
    }

    return max;
}



console.log(goodSegment([5,4,2,15], 1 ,10));