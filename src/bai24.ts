abstract class Appliance {
    abstract turnOn(): void;
  }
  
  class Fan extends Appliance {
    turnOn(): void {
      console.log("Fan is running...");
    }
  }
  
  class AirConditioner extends Appliance {
    turnOn(): void {
      console.log("AirConditioner is cooling...");
    }
  }
  
  const fan = new Fan();
  fan.turnOn();
  