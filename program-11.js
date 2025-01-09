// Write a JavaScript program that creates a class called BankAccount with properties for account number, account holder name, and balance. Include methods to deposit, withdraw, and transfer money between accounts. Create multiple instances of the BankAccount class and perform operations such as depositing, withdrawing, and transferring money.
"use strict";
class bankaccount {
  constructor(accountNumber, accountHolder, balance) {
    this.accountNumber = accountNumber;
    this.accountHolder = accountHolder;
    this.balance = balance || 0;
  }
  deposit(amount) {
    this.balance += amount;
  }
  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
    } else {
      console.log("Not enough balance");
    }
  }
  transfer(amount, toAccount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      toAccount.balance += amount;
    } else {
      console.log("Not enough balance to transfer");
    }
  }
}
let account1 = new bankaccount(101, "Rajiv", 10000);
let account2 = new bankaccount(102, "Ram", 6000);
account1.deposit(1000);
account1.withdraw(2000);
account1.transfer(1000, account2);
console.log(account1.balance);
console.log(account2.balance);
