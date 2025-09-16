// 6. Book class
class Book {
    constructor(public title: string, public author: string, public year: number) {}
  
    display() {
      console.log(`"${this.title}" by ${this.author} (${this.year})`);
    }
  }
  
  const b1 = new Book("Clean Code", "Robert C. Martin", 2008);
  b1.display();