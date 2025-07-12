// Visibility Modifiers (public, private, protected)
class Person1 {
  public name: string; // Accessible from anywhere
  private _secret: string; // Only accessible inside Person class
  protected id: string; // Accessible inside Person and its subclasses
  constructor(name: string, _secret: string, id: string) {
    this.name = name;
    this._secret = _secret;
    this.id = id;
  }
  get getSecret(): string {
    return this._secret; // OK: Accessible inside the class
  }
}
class Employee extends Person1 {
  department: string;
  constructor(name: string, _secret: string, id: string, department: string) {
    super(name, _secret, id);
    this.department = department;
  }
  public showId() {
    console.log(`Employee ID: ${this.id}`); // OK: Protected member accessible in subclass
    // console.log(this.secret); // Error: Private member not accessible in subclass
  }
}
let alice = new Person1("Alice", "topSecret", "P123");
console.log(alice.name); // Output: Alice (public)
console.log(alice.getSecret); // Output: topSecret (public method accessing private)
// console.log(alice._secret); // Error: Property 'secret' is private and only accessible within class 'Person'.
// console.log(alice.id);     // Error: Property 'id' is protected and only accessible within class 'Person' and its subclasses.
let bob = new Employee("Bob", "anotherSecret", "E456", "Engineering");
console.log(bob.name);
bob.showId(); // Output: Employee ID: E456

// Static
class MathUtils {
  static PI = 3.14159;
  static circleArea(radius: number): number {
    return MathUtils.PI * radius * radius;
  }
}
// You don't create an instance to use static members
console.log(MathUtils.PI); // 👉 3.14159
console.log(MathUtils.circleArea(5)); // 👉 78.53975

// readonly Properties
class Point {
  readonly x: number;
  readonly y: number;
  readonly description: string = "A point in 2D space"; // Can be initialized here
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    // this.description = "New description"; // OK here
  }
  move(deltaX: number, deltaY: number) {
    // this.x += deltaX; // Error: Cannot assign to 'x' because it is a read-only property.
  }
}
let p1 = new Point(10, 20);
// p1.x = 30; // Error: Cannot assign to 'x' because it is a read-only property.
console.log(p1.description);
