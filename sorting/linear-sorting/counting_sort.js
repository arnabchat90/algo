//Counting sort is linear time, and it works on the assumtion that, for an array A[1..n], there are k distinct elements
//such that 0< k < n
//Step 1 : Create an auxilliary array - this array is of length k, set the total number of repitition of each element in its particular index
//Step 2 : Add the numbers in the aux array to get cumulitive index in result array
//Step 3 : Start from the last index in the original array, find the cumulitive index in the aux array, and put it at the right position in the result array

const counting_sort = (A,k) => {
    const C = Array.from({length : k}, (_) => 0);
    const B = Array.from({length : A.length}, (_) => 0);
    //keeping total repititions of each element from arr A in arr C
    for(let i = 0;i<A.length;i++) {
        C[A[i]] = C[A[i]] + 1;
    }
    for(let i = 1;i<C.length;i++) {
        C[i] = C[i] + C[i - 1];
    }
    for(let j = A.length - 1; j >=0; j--) {
        B[C[A[j]] - 1] = A[j];
        C[A[j]] = C[A[j]] - 1;
    }
    return B;
}

const array = [4,5,2,0,1,0,4]

console.log(counting_sort(array,6))

