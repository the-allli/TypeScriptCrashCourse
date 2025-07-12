// Type Guard = Type Narrowing

function printLength(value: string | string[]) {
  if (typeof value === "string") {
    // Here TS knows: value is string
    console.log(value.length);
  } else {
    // Here TS knows: value is string[]
    console.log(value.length);
  }
}

// Common type guards
// typeof (For primitive types: "string", "number", "boolean", "symbol", "undefined", "bigint", "function".)
function log(x: string | number) {
  if (typeof x === "string") {
    console.log(x.toUpperCase());
  } else {
    console.log(x.toFixed(2));
  }
}

// instanceof
// For classes & constructors.
class Dog1 {
  bark() {}
}
class Cat {
  meow() {}
}
function speak(animal: Dog1 | Cat) {
  if (animal instanceof Dog1) {
    animal.bark();
  } else {
    animal.meow();
  }
}

// in operator
// For checking if a property exists.
type Ac = { a: string };
type Bc = { b: number };
function check(x: Ac | Bc) {
  if ("a" in x) {
    console.log(x.a); // TS knows it's A
  } else {
    console.log(x.b); // TS knows it's B
  }
}

// Custom type guards
interface Car {
  make: string;
}
interface Bike {
  pedal: boolean;
}
function isCar(v: Car | Bike): v is Car {
  return (v as Car).make !== undefined;
}
function drive(v: Car | Bike) {
  if (isCar(v)) {
    console.log(v.make.toUpperCase()); // TS knows v is Car
  } else {
    console.log(v.pedal); // TS knows v is Bike
  }
}
