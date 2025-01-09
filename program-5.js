// Write a JavaScript program that creates a class called 'Shape' with a method to calculate the area. Create two subclasses, 'Circle' and 'Triangle', that inherit from the 'Shape' class and override the area calculation method. Create an instance of the 'Circle' class and calculate its area. Similarly, do the same for the 'Triangle' class.
"use strict";
class shape {
  area() {
    return 0;
  }
}
class circle extends shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  area() {
    return Math.PI * this.radius * this.radius;
  }
}
class triangle extends shape {
  constructor(base, height) {
    super();
    this.base = base;
    this.height = height;
  }
  area() {
    return 0.5 * this.base * this.height;
  }
}
const mycircle = new circle(5);
console.log("Area of Circle: " + mycircle.area());
const mytriangle = new triangle(10, 6);
console.log("Area of Triangle: " + mytriangle.area());
