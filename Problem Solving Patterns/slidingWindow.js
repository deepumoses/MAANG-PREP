/* 
Definition: Selecting a subset of an array and updating the 
subset as we iterate through the array
usage: For problems that involve a continuous pattern 
*/

// Problem: Find the maximum sum of n continuous elements in an array (Max sum of a subset of n length in an array)

const maxSubset = (arr, n) => {
  // edge case
  if (arr.length < n) console.error("Array length is lesser than n.");

  // find sum of first n elements
  let maxSum = 0;
  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }
  let tempSum = maxSum;

  // loop and find sum of subsets as we go
  for (let i = n; i < arr.length; i++) {
    tempSum = tempSum - arr[i - n] + arr[i];
    console.log(tempSum, maxSum);
    if (tempSum > maxSum) maxSum = tempSum;
  }

  return maxSum;
};

const result = maxSubset([1, 2, 22, 3, 4, 5, 6, 7, 7, 50], 4);
console.log(result);
