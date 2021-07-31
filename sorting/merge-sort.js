//Merge sort follows the divide and conquer approach
//Step 1 -> Divide a large problem into smaller sub problem
//Step 2 -> Conquer - Solve the smallest subproblem(base case) trivially
//Step 3 -> Combine the solution of the smallest subproblem to that the combined subproblem is also solved.

//first do step 3 -> combine two sorted subarrays into a larger sorted subarray -> main part -> merge

//A is the array, p <=q < r , such that A[p..q] is sorted and A[q+1..r] is also sorted
const merge = (A, p, q, r) => {
  //count the total elements in the two sorted subarrays
  const n1 = q - p + 1;
  const n2 = r - q;
  let L = [],
    R = [];

  //create two new arrays to get two separated sorted array, here L and R are sorted
  for (var i = 0; i < n1; i++) {
    L[i] = A[p + i];
  }
  L[i] = Number.MAX_SAFE_INTEGER;
  for (var j = 0; j < n2; j++) {
    R[j] = A[q + j + 1];
  }
  //keeping a limiter at last makes sure, that we dont have to see if one is over and then transfer the rest from the other
  R[j] = Number.MAX_SAFE_INTEGER;

  //perform the merge operation
  //reinitialize the variables to loop from start of the sorted subarrays
  i = 0;
  j = 0;
  for (let k = p; k <= r; k++) {
    if (L[i] < R[j]) {
      A[k] = L[i];
      i++;
    } else {
      A[k] = R[j];
      j++;
    }
  }
  //combined array should now be sorted as well here in place
};

const merge_sort = (A, p, r) => {
  if (p < r) {
    let q = Math.floor((p + r) / 2);
    merge_sort(A, p, q);
    merge_sort(A, q + 1, r);
    merge(A, p, q, r);
  }
};

const twoSortedArray = [1, 3, 55, 2, 43, 6, 0, 8];

merge_sort(twoSortedArray, 0, twoSortedArray.length - 1);
console.log(twoSortedArray);
