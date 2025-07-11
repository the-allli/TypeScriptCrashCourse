// 1. Function Declaration
// Function with type annotations for parameters and return type
function add(x: number, y: number): number {
  return x + y;
}
let sum = add(5, 3);
console.log(sum);

// Function with optional return type annotation (TypeScript can infer it)
function greet(name: string) {
  // TypeScript infers return type as 'void'
  console.log(`Hello, ${name}!`);
}
greet("Alice");
