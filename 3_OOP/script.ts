// 1. Basic Class Structure (Properties, Methods, Constructor)
class Greeter {
  // 1. Property: A member variable
  greeting: string;
  // 2. Constructor: Special method called when a new object is created
  // It initializes the properties of the class instance.
  constructor(message: string) {
    this.greeting = message;
  }
  // 3. Method: A function associated with the class
  greet(): string {
    return "Hello, " + this.greeting;
  }
}
// Creating an instance (object) of the Greeter class
let greeter = new Greeter("world");
// Calling a method on the instance
console.log(greeter.greet()); // Output: Hello, world

// 2. Constructor Shorthand for Properties
class Vehicle {
  // These properties are automatically created and assigned based on the constructor parameters
  constructor(public brand: string, private _year: number) {
    // No need for this.brand = brand; etc.
  }
  get year(): number {
    return this._year;
  }
  set year(value: number) {
    if (value > 1900) {
      this._year = value;
    } else {
      console.log("Year must be after 1900.");
    }
  }
}
let car = new Vehicle("Toyota", 2020);
console.log(car.brand); // Output: Toyota
// console.log(car._year); // Error: Property '_year' is private.
console.log(car.year); // Using the getter: Output: 2020
car.year = 2025; // Using the setter
console.log(car.year); // Output: 2025

// 3. Classes as Types / Implementing Interfaces
interface ClockInterface {
  currentTime: Date;
  setTime(d: Date): void;
}
class Clock implements ClockInterface {
  currentTime: Date = new Date(); // Must have this property
  constructor(h: number, m: number) {} // Can have its own constructor
  setTime(d: Date) {
    // Must have this method
    this.currentTime = d;
  }
}
let myClock: Clock = new Clock(12, 30);
myClock.setTime(new Date());
console.log(myClock.currentTime);
