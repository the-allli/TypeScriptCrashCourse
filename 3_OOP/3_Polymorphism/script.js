"use strict";
class Shape {
    area() {
        return 0; // generic shape has no area
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
}
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
}
const shapes = [new Circle(5), new Rectangle(4, 6)];
shapes.forEach((shape) => {
    console.log(`Area: ${shape.area().toFixed(2)}`);
});
class CreditCard {
    pay(amount) {
        console.log(`Paid $${amount} with Credit Card`);
    }
}
class Bitcoin {
    pay(amount) {
        console.log(`Paid $${amount} with Bitcoin`);
    }
}
const payments = [new CreditCard(), new Bitcoin()];
payments.forEach((p) => p.pay(100));
