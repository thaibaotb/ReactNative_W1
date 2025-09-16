// 14. Employee class
class Employee {
    constructor(public name: string, public salary: number) {}
  
    display() {
      console.log(`${this.name} earns ${this.salary}`);
    }
  }
  
  const e1 = new Employee("Alice", 3000);
  e1.display();
  