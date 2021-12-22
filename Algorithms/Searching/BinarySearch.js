// Definition: Searching through the array by placing mid points and eliminating half of the array at each step
// Key Takeaway #1: Binary Search can only be used on sorted arrays
// Key Takeaway #2: Binary Search is way better than Linear Search! Look at the time complexity to see the difference.

// Steps
// 1. Initialize leftIndex for the array => firstIndex(0)
// 2. Initialize rightIndex for the array => lastIndex(length of the array - 1)
// 3. While leftIndex <= rightIndex
  // 3.1 Initialize midIndex of the array => Math.floor((leftIndex + rightIndex)/2)
  // 3.2 If
    // 3.2.1 element is found at midIndex => return midIndex;
    // 3.2.2 element is lesser than array value of midIndex => right = midIndex - 1 (-1 because we already searched midIndex to see if the element is there)
    // 3.2.3 element is greater than array value of midIndex => left = midIndex + 1 (+1 because we already searched midIndex to see if the element is there)
// 4. repeat step 3
// 5. return -1 indicating that the element wasnt found

const binarySearch = (inputArray, elementToBeFound) => {
    // 1. Initialize leftIndex for the array => firstIndex(0)
    let leftIndex = 0;
    // 2. Initialize rightIndex for the array => lastIndex(length of the array - 1)
    let rightIndex = inputArray.length - 1;
    // 3. While leftIndex <= rightIndex
    while (leftIndex <= rightIndex) {
        // 3.1 Initialize midIndex of the array => Math.floor((leftIndex + rightIndex)/2)
        let midIndex = Math.floor((leftIndex + rightIndex)/2);
        // 3.2 If
            // 3.2.1 element is found at midIndex => return midIndex;
            // 3.2.2 element is lesser than array value of midIndex => right = midIndex - 1 (-1 because we already searched midIndex to see if the element is there)
            // 3.2.3 element is greater than array value of midIndex => left = midIndex + 1 (+1 because we already searched midIndex to see if the element is there)
        if (inputArray[midIndex] === elementToBeFound) {
            console.log(elementToBeFound,' was found at Index', midIndex);
            return midIndex;
        } else if (elementToBeFound < inputArray[midIndex] ) {
            rightIndex = midIndex - 1;
        } else {
            leftIndex = midIndex + 1;
        }
        // 4. repeat step 3
    }
    // 5. return -1 indicating that the element wasnt found
    console.log(`Too bad! We couldnt find ${elementToBeFound} :(`)    
    return -1;    
}

const array = [22, 334, 12, 42, 86, 12];
binarySearch(array, 12);
binarySearch(array, 29);
binarySearch(array, 34);
binarySearch(array, 22);
binarySearch(array, 42);

// Time complexity: O(log n) - as it takes roughly 2^n steps/loops/traversal to find an element i.e for array size 16 => 4 steps, 32 => 5
// Space complexity: O(1)