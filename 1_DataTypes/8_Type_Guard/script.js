"use strict";
// Type Guard = Type Narrowing
function printLength(value) {
    if (typeof value === "string") {
        // Here TS knows: value is string
        console.log(value.length);
    }
    else {
        // Here TS knows: value is string[]
        console.log(value.length);
    }
}
// Common type guards
// typeof (For primitive types: "string", "number", "boolean", "symbol", "undefined", "bigint", "function".)
function log(x) {
    if (typeof x === "string") {
        console.log(x.toUpperCase());
    }
    else {
        console.log(x.toFixed(2));
    }
}
// instanceof
// For classes & constructors.
class Dog1 {
    bark() { }
}
class Cat {
    meow() { }
}
function speak(animal) {
    if (animal instanceof Dog1) {
        animal.bark();
    }
    else {
        animal.meow();
    }
}
function check(x) {
    if ("a" in x) {
        console.log(x.a); // TS knows it's A
    }
    else {
        console.log(x.b); // TS knows it's B
    }
}
function isCar(v) {
    return v.make !== undefined;
}
function drive(v) {
    if (isCar(v)) {
        console.log(v.make.toUpperCase()); // TS knows v is Car
    }
    else {
        console.log(v.pedal); // TS knows v is Bike
    }
}
