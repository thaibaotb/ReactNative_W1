// 3. Car class
class Car {
    constructor(public brand: string, public model: string, public year: number) {}
  
    showInfo() {
      console.log(`Car: ${this.brand} ${this.model} (${this.year})`);
    }
  }
  
  const c1 = new Car("Toyota", "Corolla", 2022);
  c1.showInfo();