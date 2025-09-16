// 11. Animal base class
class Animal {
    constructor(public name: string) {}
    makeSound() {
      console.log("Some generic sound...");
    }
  }
  
  class Dog extends Animal {
    makeSound() {
      console.log(`${this.name} says Woof!`);
    }
  }
  
  class Cat extends Animal {
    makeSound() {
      console.log(`${this.name} says Meow!`);
    }
  }
  
  const dog = new Dog("Buddy");
  const cat = new Cat("Kitty");
  dog.makeSound();
  cat.makeSound();
  