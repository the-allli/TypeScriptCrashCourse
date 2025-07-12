"use strict";
// 3. Arrow Function(Anonymous Function)
const multiply = (a, b) => {
    return a * b;
};
// Short form
const multiply1 = (x, y) => x * y;
// Arrow function with multiple statements (needs explicit return)
let processNumbers = (a, b) => {
    let sum = a + b;
    let product = a * b;
    console.log(`Sum: ${sum}, Product: ${product}`);
    return sum;
};
processNumbers(7, 3); // Output: Sum: 10, Product: 21
