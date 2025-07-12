interface PaymentProcessor {
  processPayment(amount: number): void;
}

class StripePayment implements PaymentProcessor {
  processPayment(amount: number) {
    console.log(`Processing $${amount} through Stripe.`);
  }
}

class PaypalPayment implements PaymentProcessor {
  processPayment(amount: number) {
    console.log(`Processing $${amount} through PayPal.`);
  }
}

function checkout(processor: PaymentProcessor, amount: number) {
  processor.processPayment(amount);
}

checkout(new StripePayment(), 100);
checkout(new PaypalPayment(), 200);

// Abstract Classes and Methods
abstract class Department {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  printName(): void {
    console.log(`Department name: ${this.name}`);
  }
  // Abstract method: Must be implemented by derived classes
  abstract printMeeting(): void;
}
class AccountingDepartment extends Department {
  constructor() {
    super("Accounting and Auditing");
  }
  printMeeting(): void {
    console.log("The Accounting Department meets each Monday at 10 AM.");
  }
  generateReports(): void {
    console.log("Generating accounting reports...");
  }
}
class ITDepartment extends Department {
  constructor() {
    super("Information Technology");
  }
  printMeeting(): void {
    console.log("The IT Department meets each Tuesday at 9 AM.");
  }
  supportUsers(): void {
    console.log("Providing user support...");
  }
}
let accounting = new AccountingDepartment();
accounting.printName(); // Output: Department name: Accounting and Auditing
accounting.printMeeting(); // Output: The Accounting Department meets each Monday at 10 AM.
accounting.generateReports(); // Output: Generating accounting reports...
let it = new ITDepartment();
it.printName();
it.printMeeting();
it.supportUsers();
