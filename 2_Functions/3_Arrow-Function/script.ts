// 3. Arrow Function(Anonymous Function)
const multiply = (a: number, b: number): number => {
  return a * b;
};
// Short form
const multiply1 = (x: number, y: number): number => x * y;
// Arrow function with multiple statements (needs explicit return)
let processNumbers = (a: number, b: number): number => {
  let sum = a + b;
  let product = a * b;
  console.log(`Sum: ${sum}, Product: ${product}`);
  return sum;
};
processNumbers(7, 3); // Output: Sum: 10, Product: 21
