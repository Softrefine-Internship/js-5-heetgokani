//  Write a JavaScript program to create a class called 'Rectangle' with properties for width and height. Include two methods to calculate rectangle area and perimeter. Create an instance of the 'Rectangle' class and calculate its area and perimeter.
"use strict";
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  calculatearea() {
    return this.width * this.height;
  }
  calculateperimeter() {
    return 2 * (this.width + this.height);
  }
}

let rectangle = new Rectangle(10, 5);

console.log("Area:", rectangle.calculatearea());
console.log("Perimeter:", rectangle.calculateperimeter());
