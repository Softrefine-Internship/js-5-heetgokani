// Write a JavaScript program that creates a class called University with properties for university name and departments. Include methods to add a department, remove a department, and display all departments. Create an instance of the University class and add and remove departments.
"use strict";
class university {
  constructor(name) {
    this.name = name;
    this.departments = [];
  }
  addDepartment(department) {
    this.departments.push(department);
  }
  removeDepartment(department) {
    let index = this.departments.indexOf(department);
    if (index !== -1) {
      this.departments.splice(index, 1);
    }
  }
  displayDepartments() {
    console.log(this.departments.join(", "));
  }
}
let myUniversity = new university("Atmiya University");
myUniversity.addDepartment("Computer Science");
myUniversity.addDepartment("Civil Engineering");
myUniversity.displayDepartments();
myUniversity.removeDepartment("Civil Engineering");
myUniversity.displayDepartments();
