//Divide and conquer algorithm
//Here a pivot element is selected, and then the correct position of the pivot is found.
//at the end of each loop, the pivot element is placed at the correct position.
//based on the right pivot position, quick sort is then run for the smaller and the larger only arrays
//the recursion stops when there is not lower or higer arrays.
//Worst case complexity is O(n2) and best and avg case is O(nlgn), but the constant here is smaller than other algos like merge sort and heap sort
//It is in-place so insertion sort

const quick_sort = (A, p , r) => {
    if(p < r) {
        const q = find_partition(A,p,r);
        quick_sort(A,p, q-1);
        quick_sort(A,q+1,r)
    }
}

const find_partition = (A,p,r) => {
    let i = p  - 1;
    let pivot = A[r];
    for(let j = p;j < r; j++) {
        if(A[j] < pivot) {
            i = i+1;
            exchange(A, i , j)
        }
    }
    //swap pivot --> right position is i + 1
    exchange(A, i + 1, r);
    return i + 1
}

const exchange = (A, i , j) => {
    const temp = A[i];
    A[i] = A[j];
    A[j] = temp;
}

const arr = [3 ,4 ,1 ,5 , 6, 7, 3, 8];
quick_sort(arr,0,arr.length - 1);
console.log(arr)