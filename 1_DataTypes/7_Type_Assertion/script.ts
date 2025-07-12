// Type Casting
let numb: string;
numb = String("12");

// Type Assertion
let value1: any = "hello";
// angle-bracket syntax
let strLength: number = (<string>value1).length;
// as-syntax (preferred, especially with JSX / React)
let strLength2: number = (value1 as string).length;

// From any to a more specific type
const data: any = "Hello World";
const length1 = (data as string).length; // tell TS: data is a string

// Working with DOM
const input = document.getElementById("username") as HTMLInputElement;
console.log(input.value);

// Narrowing unions
type Shape1 = Circle | Square;
interface Circle {
  kind: "circle";
  radius: number;
}
interface Square {
  kind: "square";
  side: number;
}
function getArea(shape: Shape1) {
  if (shape.kind === "circle") {
    return (shape as Circle).radius ** 2 * Math.PI;
  }
  return (shape as Square).side ** 2;
}

// Non-null Assertion Operator
function greet5(name?: string) {
  if (name) {
    console.log("Hello " + name.toUpperCase());
  }
}
// But if we forgot the check:
function risky(name?: string) {
  console.log("Hello " + name!.toUpperCase()); // trust me, name is not null
}

// DOM
const input2 = document.getElementById("username") as HTMLInputElement;
console.log(input2.value); // TS may complain: input could be null
// with non-null assertion
console.log(input2!.value); // I know 'username' exists in the DOM
