// 7. User class
class User {
    constructor(public username: string, public email: string) {}
  
    display() {
      console.log(`Username: ${this.username}, Email: ${this.email}`);
    }
  }
  
  const u1 = new User("johndoe", "john@example.com");
  u1.display();