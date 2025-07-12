// 2. Function Expression (Anonymous Function)
const subtract = function (a: number, b: number): number {
  return a - b;
};
// Function Types (Signatures)
// A. Typing Function Variables
// Define a variable 'myAdd' that expects a function
// taking two numbers and returning a number.
let myAdd: (baseValue: number, increment: number) => number;
// Assign a function that matches the signature
myAdd = function (x: number, y: number): number {
  return x + y;
};
console.log(myAdd(10, 5)); // Output: 15

// B. Type Aliases for Reusable Function Types
type GreeterFunction = (name: string) => string;
let friendlyGreeter: GreeterFunction = function (personName: string): string {
  return `Nice to meet you, ${personName}!`;
};
let formalGreeter: GreeterFunction = (name) => {
  // Type inference works here too
  return `Good day, Mr./Ms. ${name}.`;
};
console.log(friendlyGreeter("Sarah")); // Output: Nice to meet you, Sarah!
console.log(formalGreeter("Smith")); // Output: Good day, Mr./Ms. Smith.
