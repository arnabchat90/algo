//heap sort uses a heap data structure, which is basically a almost complete binary tree
//heap sort is in place and also O(n lg n) time complexity -> pretty good sorting algo
//heap data structure is stored in an array object, which has two properties, length and heap size
//binary trees have atmost 2 children for any node
//heap sort uses max_heaps, where A[parent] > A[left] & A[right]
//first we need a function to max_heapify, which will make sure max heap structure is maintained
//second step is to build a max heap from an unsorted array
//3rd step is after max heap is build, exchange A[1] (-> max element), with A[i] i runs from heap-size to 2
//4th last step is to run max_heapify on A[1] so that max heap is restored.

const heap_sort = (A) => {
  build_max_heap(A);
  for (let i = A.length - 1; i >= 1; i--) {
    const temp = A[i];
    A[i] = A[0];
    A[0] = temp;
    A.heap_size--;
    max_heapify(A, 0);
  }
};

const build_max_heap = (A) => {
  A.heap_size = A.length;
  for (let i = Math.floor(A.length / 2) - 1; i >= 0; i--) {
    max_heapify(A, i);
  }
};

const max_heapify = (A, i) => {
  let l = left_child(i);
  let r = right_child(i);
  let largest = i;
  if (l <= A.heap_size && A[l] > A[i]) largest = l;
  if (r <= A.heap_size && A[r] > A[largest]) largest = r;
  if (largest !== i) {
    //swap largest and i, and then recursively apply max_heapify
    const largestItem = A[largest];
    A[largest] = A[i];
    A[i] = largestItem;
    max_heapify(A, largest);
  }
};

const left_child = (i) => 2 * i + 1;
const right_child = (i) => 2 * i + 2;

const arr = [54, 2, 6, 1, 33, 67, 3, 67, 23, 6];

heap_sort(arr);
console.log(arr);
