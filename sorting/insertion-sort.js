//Inserton sort is basically sorting a deck of cards in hand.
// pick a card from the table
// insert the card in the correct place in sorted left hand
const insertion_sort = (unsortedArr) => {
  for (let j = 1; j < unsortedArr.length; j++) {
    //item in right hand => key
    const key = unsortedArr[j];
    //left hand start index
    let i = j - 1;
    while (i >= 0 && unsortedArr[i] > key) {
      //keep moving items to the right
      unsortedArr[i + 1] = unsortedArr[i];
      i = i - 1;
    }
    //insert at the right place
    unsortedArr[i + 1] = key;
  }
};
const arr = [1, 6, 3, 6, 8, 9, 0];
insertion_sort(arr);
console.log(arr);

//run time complexity
//outer loop runs for n times
//inner while loop can max run j-1 times
//time complexity => Operations(n * n-1) => 0(n2)
//space complexity => in place => constant extra space

//best case scenario => array is already sorted, the inner while loop never comes into picture O(n)
//worst case scenario => n * n-1 -> array completely reverse sorted => 0(n2)
