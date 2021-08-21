/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
    const result = [];
    const emptyWordBucket = [];

    for(let i = 0; i < strs.length; i++) {
        const word = strs[i];
        if(word == "") {
            //no need to find perm
            emptyWordBucket.push("");
           strs.splice(i, 1);
            i = -1;
        }
        else {
            let allPermutations = findPermutations(word);
            const wordBucket = [];
            allPermutations.forEach(item => {
                const filteredItems = strs.filter(x => x === item);

                if(filteredItems.length > 0) {
                    wordBucket.push(...filteredItems)
                }
                strs = strs.filter(x => x !== item)
            })
            result.push(wordBucket);
            i=-1;
        }
        
    }
     if(emptyWordBucket.length > 0) result.push(emptyWordBucket);
    return result;
};


const findPermutations = (word) => {
    const boxes = new Array(word.length).fill(0);
    const result = [];
    permutationHelper(boxes,0,word.length - 1,"", result, word);
    return result;
}

const permutationHelper = (boxes, ci, ti, asf, result, word) => {
    if(ci > ti) {
        result.push(asf);
    }
    
    for(let i=0; i < word.length; i++) {
        if(boxes[i] == 0) {
            const ch = word.charAt(i);
            boxes[i] = 1;
            permutationHelper(boxes, ci + 1, ti, asf + ch, result, word);
            boxes[i] = 0;
        }
    }
    
}
console.log(groupAnagrams(["bdddddddddd","bbbbbbbbbbc"]))