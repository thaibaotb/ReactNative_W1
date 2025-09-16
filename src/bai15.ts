// 15. Library class
class Book {
    constructor(public title: string, public author: string) {}
  }
  
  class Library {
    private books: Book[] = [];
  
    addBook(book: Book) {
      this.books.push(book);
    }
  
    showBooks() {
      this.books.forEach(b => {
        console.log(`"${b.title}" by ${b.author}`);
      });
    }
  }
  
  const lib = new Library();
  lib.addBook(new Book("1984", "George Orwell"));
  lib.addBook(new Book("To Kill a Mockingbird", "Harper Lee"));
  lib.showBooks();
  