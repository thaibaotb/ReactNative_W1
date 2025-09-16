// 13. Abstract Shape class
abstract class Shape {
    abstract area(): number;
  }
  
  class Circle extends Shape {
    constructor(public radius: number) {
      super();
    }
    area(): number {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  const c = new Circle(5);
  console.log(`Circle area: ${c.area()}`);
  