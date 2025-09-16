class Box<T> {
    constructor(private value: T) {}
  
    getValue(): T {
      return this.value;
    }
  
    setValue(val: T) {
      this.value = val;
    }
  }
  
  const numberBox = new Box<number>(100);
  console.log("Number:", numberBox.getValue());
  
  const stringBox = new Box<string>("Hello");
  console.log("String:", stringBox.getValue());
  