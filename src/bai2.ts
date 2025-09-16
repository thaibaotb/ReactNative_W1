class Person {
    constructor(public name: string, public age: number) {}
  
    displayInfo() {
      console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
  }
  // 2. Student class extends Person
  class Student extends Person {
    constructor(name: string, age: number, public grade: string) {
      super(name, age); // gọi constructor của Person
    }
  
    displayAllInfo() {
      console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
    }
  }
  
  // ---- Test ----
  const student1 = new Student("Alice", 20, "A");
  student1.displayAllInfo(); // In ra: Name: Alice, Age: 20, Grade: A