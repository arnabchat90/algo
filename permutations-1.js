/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
    const boxes = new Array(nums.length).fill(-1);
    const resultArr = [];
    findPermutations(boxes, 0, nums.length - 1, nums, resultArr)
    return resultArr;
};

const findPermutations = (boxes, ci, ti, nums, resultArr) => {
    if(ci > ti) {
        resultArr.push([...boxes]);
    }
    for(let i = 0; i < boxes.length; i++) {
        if(boxes[i] == -1) {
            boxes[i] = nums[ci];
            findPermutations(boxes, ci + 1, ti, nums, resultArr);
            boxes[i] = -1;
        }
    }
}

console.log(permute([0,1]))