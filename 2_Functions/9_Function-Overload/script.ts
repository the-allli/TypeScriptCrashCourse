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
