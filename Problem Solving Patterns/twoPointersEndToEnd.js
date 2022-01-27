// Definition: 1 pointer at start and 1 at the end of the array that 
// increment and decrement conditionally

// Problem: Find 1st pair whose sum is 0
// input: sorted array
// O(n) time and O(1) space

const arr = [-6, -5, 0, 1, 1, 2, 3, 4, 5];

function findZeroPair(arr) {
  // optimization for O(1) time
  if (arr[0] >= 0) return [];

  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    const leftElement = arr[start];
    const rightElement = arr[end];
    const sum = leftElement + rightElement;

    if (sum === 0) {
      return [leftElement, rightElement];
    } else if (sum > 0) {
      end--;
    } else {
      start++;
    }
  }

  return [];
}

console.log(findZeroPair(arr));
