interface Vehicle {
    move(): void;
  }
  
  class Car implements Vehicle {
    move(): void {
      console.log("Car is driving...");
    }
  }
  
  class Bike implements Vehicle {
    move(): void {
      console.log("Bike is moving...");
    }
  }
  
  const v1: Vehicle = new Car();
  const v2: Vehicle = new Bike();
  v1.move();
  v2.move();
  