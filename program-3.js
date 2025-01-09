// Write a JavaScript program that creates a class called 'Vehicle' with properties for make, model, and year. Include a method to display vehicle details. Create a subclass called 'Car' that inherits from the 'Vehicle' class and includes an additional property for the number of doors. Override the display method to include the number of doors.
"use strict";
class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  display() {
    console.log("Make: " + this.make);
    console.log("Model: " + this.model);
    console.log("Year: " + this.year);
  }
}
class Car extends Vehicle {
  constructor(make, model, year, doors) {
    super(make, model, year);
    this.doors = doors;
  }
  display() {
    super.display();
    console.log("Doors: " + this.doors);
  }
}
let vehicle = new Vehicle("Audi", "A4", 2021);
let car = new Car("BMW", "X5", 2022, 5);
vehicle.display();
car.display();
