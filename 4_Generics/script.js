"use strict";
// Generic Function
function identity1(arg) {
    return arg;
}
identity1(42); // explicitly specifying
identity1("hello"); // type inferred
const userResponse = {
    data: { name: "Alice" },
    status: 200,
};
const a = "hello";
const b = null;
// Generic Classes
class Box {
    constructor(value) {
        this.contents = value;
    }
}
const stringBox = new Box("hello");
const numberBox = new Box(123);
// Using multiple type parameters
function pair(key, value) {
    return [key, value];
}
const result = pair("age", 30); // ["age", 30]
const store1 = { data: "default is string" };
const store2 = { data: 123 };
// Generic constraints
function logLength(arg) {
    console.log(arg.length);
    return arg;
}
logLength("hello"); // string has length
logLength([1, 2, 3]); // array has length
// With generics
function getProp(obj, key) {
    return obj[key];
}
// ReturnType<T>
// Built-in that uses infer internally.
function greet3() {
    return "hello";
}
// InstanceType<T>
// Gets the instance type of a class constructor.
class Car {
    constructor() {
        this.model = "Tesla";
    }
}
