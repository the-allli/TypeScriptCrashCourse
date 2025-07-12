// Use type or interface to define the shape of a function.
// Type
type MathOperation = (a: number, b: number) => number;
const divide: MathOperation = (a, b) => a / b;

// Interface
interface MathFunc {
  (a: number, b: number): number;
}
const mod: MathFunc = (a, b) => a % b;
// An other way
interface Counter {
  (start: number): string; // Call signature
  interval: number; // Property
  reset(): void; // Method
}
const getCounter = (): Counter => {
  let counter = ((start: number) => {
    return `Count from ${start}`;
  }) as Counter; // Cast to Counter type
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
