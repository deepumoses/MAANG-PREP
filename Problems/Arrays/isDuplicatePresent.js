// PATTERN: FREQUENCY COUNTER
// This can also be solved using MULTIPLE POINTERS NEXT TO EACH OTHER PATTERN
// Please refer to Problem Solving Patterns/twoPointersNextToEachOther.js
// O(n) time and O(n) space

const areThereDuplicates = (...args) => {
    const frequency = {};

    for (let arg of args) {
        frequency[arg] = (frequency[arg] || 0) + 1;
        if (frequency[arg] > 1) return true;
    }

    return false;
}

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(4, 1, 2, 3));
console.log(areThereDuplicates(4, 1, 2, 4));
console.log(areThereDuplicates('a', 'b', 'c', 'a'));