// 9. Animal interface
interface Animal {
    name: string;
    sound(): void;
  }
  
  class Dog implements Animal {
    constructor(public name: string) {}
    sound() {
      console.log(`${this.name} says: Woof!`);
    }
  }
  
  const d1 = new Dog("Buddy");
  d1.sound();
  