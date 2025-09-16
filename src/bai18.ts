class MathUtil {
    static add(a: number, b: number): number {
      return a + b;
    }
    static subtract(a: number, b: number): number {
      return a - b;
    }
    static multiply(a: number, b: number): number {
      return a * b;
    }
    static divide(a: number, b: number): number {
      if (b === 0) throw new Error("Divide by zero!");
      return a / b;
    }
  }
  
  console.log("Add:", MathUtil.add(5, 3));
  console.log("Divide:", MathUtil.divide(10, 2));
  