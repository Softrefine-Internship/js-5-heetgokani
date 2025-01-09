// Write a JavaScript program that creates a class called Bank with properties for bank names and branches. Include methods to add a branch, remove a branch, and display all branches. Create an instance of the Bank class and perform operations to add and remove branches.
"use strict";
class bank {
  constructor(name) {
    this.name = name;
    this.branches = [];
  }
  addbranch(branch) {
    this.branches.push(branch);
  }
  removebranch(branch) {
    this.branches = this.branches.filter((b) => b !== branch);
    console.log(branch + " removed.");
  }
  displaybranches() {
    console.log("Branches: " + this.branches.join(", "));
  }
}
let myBank = new bank("BOI Bank");
myBank.addbranch("Delhi Branch");
myBank.addbranch("Mumbai Branch");
myBank.addbranch("Rajkot Branch");
myBank.displaybranches();
myBank.removebranch("Mumbai Branch");
myBank.displaybranches();
