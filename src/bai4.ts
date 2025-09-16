// 4. Rectangle class
class Rectangle {
    constructor(public width: number, public height: number) {}
    area() {
      return this.width * this.height;
    }
  
    perimeter() {
      return 2 * (this.width + this.height);
    }
  }
  
  const r1 = new Rectangle(10, 5);
  console.log(`Area: ${r1.area()}, Perimeter: ${r1.perimeter()}`);