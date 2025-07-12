"use strict";
// 2. Function Expression (Anonymous Function)
const subtract = function (a, b) {
    return a - b;
};
// Function Types (Signatures)
// A. Typing Function Variables
// Define a variable 'myAdd' that expects a function
// taking two numbers and returning a number.
let myAdd;
// Assign a function that matches the signature
myAdd = function (x, y) {
    return x + y;
};
console.log(myAdd(10, 5)); // Output: 15
let friendlyGreeter = function (personName) {
    return `Nice to meet you, ${personName}!`;
};
let formalGreeter = (name) => {
    // Type inference works here too
    return `Good day, Mr./Ms. ${name}.`;
};
console.log(friendlyGreeter("Sarah")); // Output: Nice to meet you, Sarah!
console.log(formalGreeter("Smith")); // Output: Good day, Mr./Ms. Smith.
