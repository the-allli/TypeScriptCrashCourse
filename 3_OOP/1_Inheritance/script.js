"use strict";
// Inheritance (extends and super)
class Animal {
    constructor(theName) {
        this.name = theName;
    }
    move(distanceInMeters = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
class Dog extends Animal {
    constructor(name, breed) {
        // Call the parent class's constructor
        super(name);
        this.breed = breed;
    }
    bark() {
        console.log("Woof! Woof!");
    }
    // Override a method from the parent class
    move(distanceInMeters = 5) {
        console.log("Running...");
        super.move(distanceInMeters); // Call the parent's move method
    }
}
let dog = new Dog("Buddy", "Golden Retriever");
dog.bark(); // Output: Woof! Woof!
dog.move(10); // Output: Running... \n Buddy moved 10m.
console.log(dog.name); // Output: Buddy
console.log(dog.breed); // Output: Golden Retriever
