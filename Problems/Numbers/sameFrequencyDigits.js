// PATTERN: FREQUENCY COUNTER

/* 
Problem: Given two digits find if they have the same frequency of digits
Time: O(n + m) or O(n)
Space: O(n + m) or O(n)
*/

const sameFrequency = (num1, num2) => {
    // get frequency of 1st number
    const num1Frequency = {};
    while (num1 > 0) {
        const digit = num1 % 10;
        num1Frequency[digit] = (num1Frequency[digit] || 0) + 1;
        num1 = Math.floor(num1 / 10);
    }

    while (num2 > 0) {
        const digit = num2 % 10;
        if (!num1Frequency[digit]) return false;
        num1Frequency[digit]--;
        num2 = Math.floor(num2 / 10);
    }

    return true;
}


const result = sameFrequency(2, 2);
console.log(result);