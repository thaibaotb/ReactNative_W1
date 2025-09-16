// 1. Person class
class Person {
  constructor(public name: string, public age: number) {}

  displayInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

// Tạo đối tượng và in ra kết quả
const person1 = new Person('Alice', 25);
person1.displayInfo();
