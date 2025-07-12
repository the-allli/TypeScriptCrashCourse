"use strict";
const divide = (a, b) => a / b;
const mod = (a, b) => a % b;
const getCounter = () => {
    let counter = ((start) => {
        return `Count from ${start}`;
    }); // Cast to Counter type
    counter.interval = 1000;
    counter.reset = () => {
        console.log("Counter reset!");
    };
    return counter;
};
let myCounter = getCounter();
console.log(myCounter(5)); // Output: Count from 5
console.log(myCounter.interval); // Output: 1000
myCounter.reset(); // Output: Counter reset!
