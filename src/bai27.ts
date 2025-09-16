class Person {
    constructor(public name: string, public age: number) {}
  }
  
  class Teacher extends Person {
    constructor(name: string, age: number, public subject: string) {
      super(name, age);
    }
  
    introduce() {
      console.log(`I am ${this.name}, I teach ${this.subject}.`);
    }
  }
  
  const teacher1 = new Teacher("Alice", 30, "Math");
  teacher1.introduce();
  