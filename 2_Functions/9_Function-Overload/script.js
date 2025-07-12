"use strict";
function greet1(arg) {
    if (typeof arg === "string") {
        return `Hello ${arg}`;
    }
    else {
        return `You are ${arg} years old`;
    }
}
console.log(greet1("Alice"));
console.log(greet1(25));
// Implementation signature (must be compatible with all overloads)
function addValues(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
console.log(addValues(1, 2)); // OK (number overload) -> Output: 3
console.log(addValues("Hello", "World")); // OK (string overload) -> Output: HelloWorld
console.log(addValues("Count: ", 5)); // OK (string, number overload) -> Output: Count: 5
console.log(addValues(10, " items")); // OK (number, string overload) -> Output: 10 items
