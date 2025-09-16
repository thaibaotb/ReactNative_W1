// 12. Flyable & Swimmable interfaces
interface Flyable {
    fly(): void;
  }
  
  interface Swimmable {
    swim(): void;
  }
  
  class Duck implements Flyable, Swimmable {
    fly() {
      console.log("Duck is flying!");
    }
    swim() {
      console.log("Duck is swimming!");
    }
  }
  
  const d = new Duck();
  d.fly();
  d.swim();
  