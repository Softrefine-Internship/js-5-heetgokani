// Write a JavaScript program that creates a class called 'Animal' with properties for species and sound. Include a method to make the animal's sound. Create a subclass called 'Dog' that inherits from the 'Animal' class and adds an additional property for color. Override the make sound method to include the dog's color. Create an instance of the 'Dog' class and make it make its sound.
"use strict";
class animal {
  constructor(species, sound) {
    this.species = species;
    this.sound = sound;
  }
  makesound() {
    console.log(this.species + " makes sound: " + this.sound);
  }
}
class dog extends animal {
  constructor(species, sound, color) {
    super(species, sound);
    this.color = color;
  }
  makesound() {
    console.log(
      this.color + " " + this.species + " makes sound: " + this.sound
    );
  }
}
const mydog = new dog("Dog", "bhaooo", "White");
mydog.makesound();
