// Generic Function
function identity1<T>(arg: T): T {
  return arg;
}
identity1<number>(42); // explicitly specifying
identity1("hello"); // type inferred

// Generic Interfaces
interface ApiResponse<T> {
  data: T;
  status: number;
  error?: string;
}
const userResponse: ApiResponse<{ name: string }> = {
  data: { name: "Alice" },
  status: 200,
};

// Generic Type-Aliases
type Nullable<T> = T | null;
const a: Nullable<string> = "hello";
const b: Nullable<number> = null;

// Generic Classes
class Box<T> {
  contents: T;
  constructor(value: T) {
    this.contents = value;
  }
}
const stringBox = new Box("hello");
const numberBox = new Box(123);

// Using multiple type parameters
function pair<K, V>(key: K, value: V): [K, V] {
  return [key, value];
}
const result = pair<string, number>("age", 30); // ["age", 30]

// Default generic type parameters
interface Store<T = string> {
  data: T;
}
const store1: Store = { data: "default is string" };
const store2: Store<number> = { data: 123 };

// Generic constraints
function logLength<T extends { length: number }>(arg: T): T {
  console.log(arg.length);
  return arg;
}
logLength("hello"); // string has length
logLength([1, 2, 3]); // array has length
// logLength(42);   // Error, number has no length

// Conditional types (advanced)
type IsString<T> = T extends string ? "yes" : "no";
type A = IsString<string>; // "yes"
type BB = IsString<number>; // "no"

// Utility types (leveraging generics)
// keyof
// Gets all the keys of a type as a union of string literal types.
type Person4 = { name: string; age: number };
type Keys1 = keyof Person; // "name" | "age"

// With generics
function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

// infer
// Extracts a type inside a conditional type.
type ReturnTypeOfFn<T> = T extends (...args: any[]) => infer R ? R : never;
type Aa = ReturnTypeOfFn<() => number>; // number

// ReturnType<T>
// Built-in that uses infer internally.
function greet3() {
  return "hello";
}
type GreetReturn = ReturnType<typeof greet3>; // string

// Parameters<T>
// Gets the tuple of argument types of a function.
type Fn = (name: string, age: number) => boolean;
type Args = Parameters<Fn>; // [string, number]

// Partial<T>
// Makes all properties optional
type Person5 = { name: string; age: number };
type PartialPerson1 = Partial<Person5>;
// { name?: string; age?: number }

// Readonly<T>
// Makes all properties readonly.
type ReadonlyPerson1 = Readonly<Person5>;
// { readonly name: string; readonly age: number }

// Pick<T, K>
// Constructs a type by picking the specified keys.
type NameOnly = Pick<Person, "name">;
// { name: string }

// Record<K, T>
// Constructs an object type whose keys are K and values are T.
type Status1 = "success" | "error";
type ResponseMap = Record<Status1, string>;
// { success: string; error: string }

// Omit<T, K>
// Removes the specified keys.
type WithoutAge = Omit<Person5, "age">;
// { name: string }

// Exclude<T, U>
// Removes from T any types that are assignable to U.
type Aaa = Exclude<"a" | "b" | "c", "b">; // "a" | "c"

// Extract<T, U>
// Opposite of Exclude: gets only the types assignable to U.
type Bb = Extract<"a" | "b" | "c", "b" | "d">; // "b"

// NonNullable<T>
// Removes null and undefined from T.
type C = NonNullable<string | null | undefined>; // string

// InstanceType<T>
// Gets the instance type of a class constructor.
class Car {
  model = "Tesla";
}
type CarInstance = InstanceType<typeof Car>;
// Same as: Car

// Awaited<T>
// Helps unwrap nested promises.
type Aaaa = Awaited<Promise<string>>; // string
type Bbb = Awaited<Promise<Promise<number>>>; // number
