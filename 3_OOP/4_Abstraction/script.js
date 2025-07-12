"use strict";
class StripePayment {
    processPayment(amount) {
        console.log(`Processing $${amount} through Stripe.`);
    }
}
class PaypalPayment {
    processPayment(amount) {
        console.log(`Processing $${amount} through PayPal.`);
    }
}
function checkout(processor, amount) {
    processor.processPayment(amount);
}
checkout(new StripePayment(), 100);
checkout(new PaypalPayment(), 200);
// Abstract Classes and Methods
class Department {
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log(`Department name: ${this.name}`);
    }
}
class AccountingDepartment extends Department {
    constructor() {
        super("Accounting and Auditing");
    }
    printMeeting() {
        console.log("The Accounting Department meets each Monday at 10 AM.");
    }
    generateReports() {
        console.log("Generating accounting reports...");
    }
}
class ITDepartment extends Department {
    constructor() {
        super("Information Technology");
    }
    printMeeting() {
        console.log("The IT Department meets each Tuesday at 9 AM.");
    }
    supportUsers() {
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
