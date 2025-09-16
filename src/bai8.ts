// 8. Product class
class Product {
    constructor(public name: string, public price: number, public quantity: number) {}
  
    getTotalPrice() {
      return this.price * this.quantity;
    }
  
    display() {
      console.log(`${this.name} - ${this.quantity} x ${this.price} = ${this.getTotalPrice()}`);
    }
  }
  
  const p1 = new Product("Laptop", 1500, 2);
  p1.display();
  