"use strict";
// Type Casting
let numb;
numb = String("12");
// Type Assertion
let value1 = "hello";
// angle-bracket syntax
let strLength = value1.length;
// as-syntax (preferred, especially with JSX / React)
let strLength2 = value1.length;
// From any to a more specific type
const data = "Hello World";
const length1 = data.length; // tell TS: data is a string
// Working with DOM
const input = document.getElementById("username");
console.log(input.value);
function getArea(shape) {
    if (shape.kind === "circle") {
        return shape.radius ** 2 * Math.PI;
    }
    return shape.side ** 2;
}
// Non-null Assertion Operator
function greet5(name) {
    if (name) {
        console.log("Hello " + name.toUpperCase());
    }
}
// But if we forgot the check:
function risky(name) {
    console.log("Hello " + name.toUpperCase()); // trust me, name is not null
}
// DOM
const input2 = document.getElementById("username");
console.log(input2.value); // TS may complain: input could be null
// with non-null assertion
console.log(input2.value); // I know 'username' exists in the DOM
