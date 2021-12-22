// Definition: Similar to bubble sort.. but instead of comparing each element after the current index and "bubbling up" the maximum, 
// we find the minimum value after the current index and make only 1 swap to place the minimum value in "its correct place"
// Why call it Selection sort? - Because we "select" the minimum at each iteration and then swap.

// Steps:
// 1. Start a loop from startIndex to endIndex
  // 1.1 Assume that the element at currentIndex is the "current minimum index"
  // 1.2. Start a inner loop from current outer index + 1 till the endIndex of the array
    // 1.2.1 if element at current inner loop index is lesser than the current minimum then make it the 'current minimum index'
  // 1.3 if minIndex is not equal to i(we are basically checking if minIndex has changed when compared to the initialisation at the start of the outer loop)
// 2. Return the array

// Steps for swapping two elements in an array
// Parameters needed: firstIndex and secondIndex to be swapped
// 1. Store the element at firstIndex in a variable(usually named temp. We are storing it here, as the element at firstIndex will be reassigned in the next step)
// 2. Store the element at secondIndex in the firstIndex
// 3. Store the temp element/value(this was the firstIndex value) in the secondIndex

const selectionSort = (inputArray) => {
    // 1. Start a loop from startIndex to endIndex
    for (let i = 0; i< inputArray.length; i++) {
        // 1.1 Assume that the element at currentIndex is the "minimum"
        let minIndex = i;
        // 1.2. Start a inner loop from current outer index + 1 till the endIndex of the array
        for (let j = i + 1; j < inputArray.length; j++) {
            // 1.2.1 if element at current inner loop index is lesser than the current minimum then swap!
            if (inputArray[j] < inputArray[minIndex]) {
                minIndex = j;
            }
        }
        // 1.3 if minIndex is not equal to i(we are basically checking if minIndex has changed when compared to the initialisation at the start of the outer loop)
        if (minIndex !== i) {
            swap(minIndex, i, inputArray);
        }
    }
    // 2. Return the array
    console.log('The selection sorted array is', inputArray);
    return inputArray;
}


function swap(firstIndex, secondIndex, inputArray) {
    // 1. Store the element at firstIndex in a variable(usually named temp. We are storing it here, as the element at firstIndex will be reassigned in the next step)
    let temp = inputArray[firstIndex];
    // 2. Store the element at secondIndex in the firstIndex
    inputArray[firstIndex] = inputArray[secondIndex];
    // 3. Store the temp element/value(this was the firstIndex value) in the secondIndex
    inputArray[secondIndex] = temp;
}

const array = [9, 8, 46, 1, 3, 54];
selectionSort(array);

// Complexity is same as BubbleSort..yes, this isnt a better version of bubbleSort!
// Time complexity: O(n^2)
// Space complexity: O(1)