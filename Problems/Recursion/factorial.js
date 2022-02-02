// Find factorial given a number n using recursion

function factorial(n) {
    // base case
    if (n <= 1) return 1;

    return n * factorial(n - 1);
}

console.log(factorial(5));