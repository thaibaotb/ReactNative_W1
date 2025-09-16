class Animal {
    protected makeSound(): void {
      console.log("Some sound...");
    }
  
    public callSound() {
      this.makeSound();
    }
  }
  
  class Dog extends Animal {
    protected makeSound(): void {
      console.log("Woof!");
    }
  }
  
  class Cat extends Animal {
    protected makeSound(): void {
      console.log("Meow!");
    }
  }
  
  const d = new Dog();
  const c = new Cat();
  d.callSound();
  c.callSound();
  