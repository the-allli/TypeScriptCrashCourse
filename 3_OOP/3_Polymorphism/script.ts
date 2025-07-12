class Shape {
  area(): number {
    return 0; // generic shape has no area
  }
}
class Circle extends Shape {
  constructor(public radius: number) {
    super();
  }
  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}
class Rectangle extends Shape {
  constructor(public width: number, public height: number) {
    super();
  }
  area(): number {
    return this.width * this.height;
  }
}
const shapes: Shape[] = [new Circle(5), new Rectangle(4, 6)];
shapes.forEach((shape) => {
  console.log(`Area: ${shape.area().toFixed(2)}`);
});

//
interface PaymentMethod {
  pay(amount: number): void;
}
class CreditCard implements PaymentMethod {
  pay(amount: number): void {
    console.log(`Paid $${amount} with Credit Card`);
  }
}
class Bitcoin implements PaymentMethod {
  pay(amount: number): void {
    console.log(`Paid $${amount} with Bitcoin`);
  }
}
const payments: PaymentMethod[] = [new CreditCard(), new Bitcoin()];
payments.forEach((p) => p.pay(100));
