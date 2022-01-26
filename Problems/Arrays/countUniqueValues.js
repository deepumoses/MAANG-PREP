// Given a sorted array count the number of unique values in it
// Restriction:  Space should be O(1)
// PATTERN: MULTIPLE POINTERS

// for loop (more readable and easier to understand)
function countUniqueValuesFor(arr) {
  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return i === 0 ? i : i + 1;
}

// using while loop
function countUniqueValuesWhile(arr) {
  // edge case
  if (!arr.length) return 0;

  let i = 0;
  let j = i + 1;

  while (j < arr.length) {
    const left = arr[i];
    const right = arr[j];

    if (left === right) {
      j++;
    } else {
      if (j - i > 1) {
        i++;
        arr[i] = right;
        j++;
      } else {
        i++;
        j++;
      }
    }
  }

  return i + 1; // coz arrays are zero indexed
}

// for loop
const result1 = countUniqueValuesFor([-3, -1, 1, 5, 6, 7, 7, 8, 8, 8, 11]);
console.log(result1);

// while loop
const result2 = countUniqueValuesWhile([-3, -1, 1, 5, 6, 7, 7, 8, 8, 8, 11]);
console.log(result2);
