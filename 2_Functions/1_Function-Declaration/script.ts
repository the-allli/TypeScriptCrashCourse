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

// Anonymous Function returned from function
function createAdder(x: number): (y: number) => number {
  // Anonymous Function
  return function (y: number): number {
    return x + y;
  };
}
const add5 = createAdder(5);
console.log(add5(3)); // 8

// 2. Optional, Default and Rest Parameters
// A. Optional Parameters (?)
function buildName(firstName: string, lastName?: string): string {
  if (lastName) {
    return `${firstName} ${lastName}`;
  } else {
    return firstName;
  }
}
let result1 = buildName("Bob"); // OK: Output: Bob
let result2 = buildName("Bob", "Adams"); // OK: Output: Bob Adams

// B. Default Parameters (= value)
function buildNameWithDefault(
  firstName: string,
  lastName: string = "Smith"
): string {
  return `${firstName} ${lastName}`;
}
let resultA = buildNameWithDefault("John"); // OK: Output: John Smith
let resultB = buildNameWithDefault("John", "Doe"); // OK: Output: John Doe
// If you pass `undefined`, the default value is used:
let resultC = buildNameWithDefault("John", undefined); // OK: Output: John Smith

// C. Rest Parameters (...)
function buildTeam(captain: string, ...members: string[]): string {
  return `Captain: ${captain}, Team Members: ${members.join(", ")}`;
}
let team1 = buildTeam("Alice"); // Output: Captain: Alice, Team Members:
let team2 = buildTeam("Bob", "Charlie", "David"); // Output: Captain: Bob, Team Members: Charlie, David
let team3 = buildTeam("Eve", "Frank", "Grace", "Heidi"); // Output: Captain: Eve, Team Members: Frank, Grace, Heidi
