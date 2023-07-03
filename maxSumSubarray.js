// Maximum Sum Subarray of Fixed Size:
// Given an array of integers and a fixed window size, find the maximum sum of a subarray of the given window size.

function maxSumSubarray(arr, k){
    let maxSum = 0;
    let windowSum = 0;
    let windowStart = 0;

    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        windowSum += arr[windowEnd];

        if (windowEnd >= k - 1) {
          maxSum = Math.max(maxSum, windowSum);
          windowSum -= arr[windowStart];
          windowStart++;
        }
    
    }
    return maxSum;
}

const arr = [2, 1, 5, 1, 3, 2];
const k = 3;
console.log(maxSumSubarray(arr, k)); // Output: 9