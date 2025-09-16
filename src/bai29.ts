interface Movable {
    move(): void;
  }
  
  class Car implements Movable {
    move(): void {
      console.log("Car is moving on road.");
    }
  }
  
  class Robot implements Movable {
    move(): void {
      console.log("Robot is walking.");
    }
  }
  
  const m1: Movable = new Car();
  const m2: Movable = new Robot();
  m1.move();
  m2.move();
  