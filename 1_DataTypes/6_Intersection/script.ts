// Intersection
// Type Aliases
type B = { name: string } & { age: number };
let person: B = {
  name: "John",
  age: 30,
}; // ok

interface HasName {
  name: string;
}
interface HasAge {
  age: number;
}
// Extending Interface
interface HasEmail extends HasName, HasAge {
  email: string;
}
// Create a new type that must have both 'name' and 'age'
// Type Aliases
type Insan = HasName & HasAge;
let user: Insan = {
  name: "Jane Doe",
  age: 42,
};
