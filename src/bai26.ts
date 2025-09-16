class Product {
    constructor(public name: string, public price: number) {}
  }
  
  class Order {
    products: Product[] = [];
  
    addProduct(p: Product) {
      this.products.push(p);
    }
  
    getTotal(): number {
      return this.products.reduce((sum, p) => sum + p.price, 0);
    }
  }
  
  const order = new Order();
  order.addProduct(new Product("Book", 50));
  order.addProduct(new Product("Pen", 5));
  console.log("Total:", order.getTotal());
  