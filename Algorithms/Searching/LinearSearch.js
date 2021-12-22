// 1. Loop through the array from startingIndex to endingIndex
// 2. If element is found return that index
// Return -1 after the loop

const linearSearch = (inputArray, elementToBeFound) => {
    // 1. Loop through the array
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] === elementToBeFound) {
            console.log(`Element found at index ${i}`);
            return i;
        }
    }
    console.log('We searched for him.. but couldnt find him :(');
    return -1;
}

// 2. If element is found return that index
// 3. Return -1 after the loop

const array = [1,2,3,4,5,6,7,8,9,10];
linearSearch(array, 3);
linearSearch(array, 29);
linearSearch(array, 34);
linearSearch(array, 6);
linearSearch(array, 7);

// Time Complexity: O(n) - Since we are looping through every item in the array and n = length of the array
// Space Complexity: O(1) - We are using memory to store only the index, which is constant space.. Space complexity usually increases only if we create new arrays/objects