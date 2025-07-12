function greet1(name: string): string;
function greet1(age: number): string;
function greet1(arg: string | number): string {
  if (typeof arg === "string") {
    return `Hello ${arg}`;
  } else {
    return `You are ${arg} years old`;
  }
}

console.log(greet1("Alice"));
console.log(greet1(25));
// Overload signatures
function addValues(a: number, b: number): number;
function addValues(a: string, b: string): string;
function addValues(a: string, b: number): string;
function addValues(a: number, b: string): string;
// Implementation signature (must be compatible with all overloads)
function addValues(a: any, b: any): any {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}
console.log(addValues(1, 2)); // OK (number overload) -> Output: 3
console.log(addValues("Hello", "World")); // OK (string overload) -> Output: HelloWorld
console.log(addValues("Count: ", 5)); // OK (string, number overload) -> Output: Count: 5
console.log(addValues(10, " items")); // OK (number, string overload) -> Output: 10 items
