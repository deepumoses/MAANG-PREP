// Definition: Keeping count of occurrences in an object
// check if two strings are valid anagrams
// O(n) time and O(1) space

function validAnagram(str1, str2){
    // edge case
    if (str1.length !== str2.length) return false;
    
    const counter = {};
    
    for (let str of str1) {
        counter[str] = (counter[str] || 0) + 1;
    }
    
    for (let str of str2) {
        if (!counter[str]) {
            return false;
        }
        counter[str]--;
    }
    
    return true;
  }

  const result = validAnagram('anagrams', 'nagarams');

  console.log(result);