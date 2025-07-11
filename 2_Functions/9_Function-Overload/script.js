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
