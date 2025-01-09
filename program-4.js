// Write a JavaScript program that creates a class called "BankAccount" with properties for account number and balance. Include methods to deposit and withdraw money from the account. Create some instances of the "BankAccount" class, deposit some money, and withdraw a portion of it.
"use strict";
class bankaccount {
  constructor(accountnumber, balance = 0) {
    this.accountnumber = accountnumber;
    this.balance = balance;
  }
  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log("Deposited: " + amount);
    }
  }
  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log("Withdrew: " + amount);
    }
  }
}
const account1 = new bankaccount(101, 500);
const account2 = new bankaccount(102, 1000);
account1.deposit(200);
account2.deposit(300);
account1.withdraw(300);
account2.withdraw(500);
