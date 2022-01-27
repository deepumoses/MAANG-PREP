// Definition: 1 pointer at start and 1 right next to it (indexs 0 and 1)
// Note: This can also be solved using the frequencyCounter pattern

// Problem: Find if there are duplicates for the given arguments
// input: arguments of any data type
// O(nlogn) time and O(1) space

const areThereDuplicates = (...args) => {
    args.sort();
    let i = 0;
    for (let j = 1; j < args.length; j++) {
        if (args[i] === args[j]) return true;
        i++;
    }

    return false;
}

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(4, 1, 2, 3));
console.log(areThereDuplicates(4, 1, 2, 4));
console.log(areThereDuplicates('a', 'b', 'c', 'a'));