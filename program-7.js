// Write a JavaScript program that creates a class `Book` with properties for title, author, and publication year. Include a method to display book details. Create a subclass called 'Ebook' that inherits from the 'Book' class and includes an additional property for book price. Override the display method to include the book price. Create an instance of the 'Ebook' class and display its details.
"use strict";
class book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  displaydetails() {
    console.log("Title: " + this.title);
    console.log("Author: " + this.author);
    console.log("Publication Year: " + this.year);
  }
}
class ebook extends book {
  constructor(title, author, year, price) {
    super(title, author, year);
    this.price = price;
  }
  displaydetails() {
    super.displaydetails();
    console.log("Price: ₹" + this.price);
  }
}
const myEbook = new ebook("Javascript Basic", "Jonas", 2025, 999);
myEbook.displaydetails();
