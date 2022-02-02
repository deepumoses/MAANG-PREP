// Implement Math.pow() using recursion

function power(n, pow) {
    // base case
    if (pow === 0) return 1;
    if (pow === 1) return n;

    return n * power(n, pow - 1)
}

console.log(power(2, 0));
console.log(power(2, 2));
console.log(power(2, 4));