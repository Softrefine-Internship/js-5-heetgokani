// Write a JavaScript program that creates a class called Product with properties for product ID, name, and price. Include a method to calculate the total price by multiplying the price by the quantity. Create a subclass called PersonalCareProduct that inherits from the Product class and adds an additional property for the warranty period. Override the total price calculation method to include the warranty period. Create an instance of the PersonalCareProduct class and calculate its total price.
"use strict";
class product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
  totalprice(quantity) {
    return this.price * quantity;
  }
}
class personalcareproduct extends product {
  constructor(id, name, price, warranty) {
    super(id, name, price);
    this.warranty = warranty;
  }
  totalprice(quantity) {
    return super.totalprice(quantity) + this.warranty * 50;
  }
}
let myProduct = new personalcareproduct(101, "Smartphone", 15000, 2);
console.log("Total Price: ₹" + myProduct.totalprice(3));
