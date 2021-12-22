// Definition: Picking an element, comparing it with rest of the array and swapping if next element is lesser the element you picked. 
// Repeating this process for each element is Bubble Sort since the element "bubbles up" to the end of the array.

// Steps
// 1. Start a loop from startIndex to endIndex
  // 1.2 Start another loop from startIndex to Array length - 1 - currentIndex of Outer loop i.e for 0, end will be last Index, for 1 the one before last and so on
    // 1.2.1 Comparing elements at outer and inner Index, if outer element is greater than inner element then swap(steps for swapping written below). 
// return the input array

// Steps for swapping two elements in an array
// Parameters needed: firstIndex and secondIndex to be swapped
// 1. Store the element at firstIndex in a variable(usually named temp. We are storing it here, as the element at firstIndex will be reassigned in the next step)
// 2. Store the element at secondIndex in the firstIndex
// 3. Store the temp element/value(this was the firstIndex value) in the secondIndex


const bubbleSort = (inputArray) => {
    // 1. Start a loop from startIndex to endIndex
    for (let i = 0; i < inputArray.length; i++) {
        // 1.2 Start another loop from startIndex to Array length - 1 - currentIndex of Outer loop
        for (let j = 0; j < inputArray.length - 1 - i; j++) {
            // 1.2.1 Comparing elements at inner Index and innerIndex+1, if innerIndex element is greater than innerIndex+1 element then swap(steps for swapping written below). 
            if (inputArray[j] > inputArray[j+1]) swap(j, j+1, inputArray);
        }
    }
    console.log('The bubble sorted array is ', inputArray);
    return inputArray;
}

function swap(firstIndex, secondIndex, inputArray) {
    let temp = inputArray[firstIndex];
    inputArray[firstIndex] = inputArray[secondIndex];
    inputArray[secondIndex] = temp;
}

const array = [9, 8, 46, 1, 3, 54];
bubbleSort(array)

// Time complexity: O(n^2) - Since we loop through the rest of the array for each Element
// Space complexity: O(1) - Since we dont create any new array but use the same array to sort the elements by swapping