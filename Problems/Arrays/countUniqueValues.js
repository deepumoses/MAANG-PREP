// Given a sorted array count the number of unique values in it
// Restriction:  Space should be O(1)

function countUniqueValues(arr){
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
            if (j-i > 1) {
                i++;
                arr[i] = right;
                j++;
            } else {
                i++;
                j++;
            }
        }
    }
    
    return i+1; // coz arrays are zero indexed
  }

  // Pattern used: MultiplePointers