// Write a JavaScript program that creates a class called 'Employee' with properties for name and salary. Include a method to calculate annual salary. Create a subclass called 'Manager' that inherits from the 'Employee' class and adds an additional property for department. Override the annual salary calculation method to include bonuses for managers. Create two instances of the 'Manager' class and calculate their annual salary.
"use strict";
class employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
  annualsalary() {
    return this.salary * 12;
  }
}
class manager extends employee {
  constructor(name, salary, department, bonus) {
    super(name, salary);
    this.department = department;
    this.bonus = bonus;
  }
  annualsalary() {
    return super.annualsalary() + this.bonus;
  }
}
const manager1 = new manager("kuldeep", 5000, "HR", 10000);
console.log("Annual Salary of Manager 1: " + manager1.annualsalary());
const manager2 = new manager("sanjay", 6000, "IT", 15000);
console.log("Annual Salary of Manager 2: " + manager2.annualsalary());
