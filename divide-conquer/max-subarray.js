// For any array A, find a contigous subarray who's value is maximum
//divide the array into L and R subarray, and recursively call max-subarray
//base case is when l == r, that is only when element is present and that the max subarray
//so the max subarray is going to lie in either L or R or in the cross-subarray
//so find the largest sub array crossing a mid point => O(n)

const max_subarray = (A, low, high) => {
  if (low == high) {
    return { low, high, sum: A[low] };
  } else {
    const mid = Math.floor((low + high) / 2);
    const { low: left_low, high: left_high, sum: left_sum } = max_subarray(
      A,
      low,
      mid
    );
    const { low: right_low, high: right_high, sum: right_sum } = max_subarray(
      A,
      mid + 1,
      high
    );
    const { low: cross_low, high: cross_high, sum: cross_sum } = max_cross_sum(
      A,
      low,
      mid,
      high
    );
    if (left_sum >= right_sum && left_sum >= cross_sum) {
      return {
        low: left_low,
        high: left_high,
        sum: left_sum,
      };
    } else if (right_sum >= left_sum && right_sum >= cross_sum) {
      return {
        low: right_low,
        high: right_high,
        sum: right_sum,
      };
    } else {
      return {
        low: cross_low,
        high: cross_high,
        sum: cross_sum,
      };
    }
  }
};

//cross sum algo
//mid is given, so keep a running sum and a max sum for left, and also the index in left half
//do the same for right sum and right half index
//then return the left index right index and the total sum of left and right half
//O(n) as only two traversals from mid is required

const max_cross_sum = (A, low, mid, high) => {
  let left_sum = Number.MIN_SAFE_INTEGER;
  let right_sum = Number.MIN_SAFE_INTEGER;
  let left_index = mid,
    right_index = mid + 1;
  let left_running_sum = 0;
  let right_running_sum = 0;
  for (let i = mid; i >= low; i--) {
    left_running_sum += A[i];
    if (left_running_sum > left_sum) {
      left_sum = left_running_sum;
      left_index = i;
    }
  }
  for (let i = mid + 1; i <= high; i++) {
    right_running_sum += A[i];
    if (right_running_sum > right_sum) {
      right_sum = right_running_sum;
      right_index = i;
    }
  }
  return {
    low: left_index,
    high: right_index,
    sum: left_sum + right_sum,
  };
};

const arr = [1, -4, 5, 7, -9, 10, 20, -5, -6];

console.log(max_subarray(arr, 0, arr.length - 1));

//total complexity - O(n lg(n))
//Recursive Formula - T(n) = 2T(n/2) + O(n)
