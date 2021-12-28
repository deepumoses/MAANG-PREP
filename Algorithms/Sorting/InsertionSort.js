// Definition: The element is 'inserted' in sorted left portion of the array
// O(n^2)

// Steps
// 1. Assume first element is "sorted"
// 2. Loop through each element on the right starting from index "1"
    // 2.1 Loop through left until we find the "correct position" for the current element 
    // ...i.e we should loop as long as the left elements are greater than our current element
        // 2.1.1 Assign leftIndex+1 to element at leftIndex
    // 2.2 Assign/Place the current element at the "correct position"
// place the element in the right position of the "sorted left portion of the array"

const insertionSort = (inputArray) => {
    // 1. Assume first element is "sorted"
    // 2. Loop through each element on the right starting from index "1"
    for (let i = 1; i< inputArray.length; i++) {
        let current = inputArray[i];
        // 2.1 Loop through left until we find the "correct position" for the current element 
        // ...i.e we should loop as long as the left elements are greater than our current element
        for (j = i-1; j>=0 && inputArray[j] > current; j--) {
            // 2.1.1 Assign/Place the current element at the "correct position"
            inputArray[j+1] = inputArray[j];
        }
        // 2.2 Assign/Place the current element at the "correct position"
        inputArray[j+1] = current;
    }
    console.log('The insertion sorted array is ', inputArray);
    return inputArray;
}


const array = [8 , 2 , 4 ,65];
insertionSort(array);

// Complexity is same as BubbleSort and Selection Sort..Typically used in scenarios where live incoming data needs to be sorted
// Time complexity: O(n^2)
// Space complexity: O(1)