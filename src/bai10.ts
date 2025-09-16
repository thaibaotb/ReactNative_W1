// 10. Account class
class Account {
    constructor(public id: number, public owner: string, public balance: number = 0) {}
  
    deposit(amount: number) {
      this.balance += amount;
      console.log(`Deposited ${amount}. Balance: ${this.balance}`);
    }
  
    withdraw(amount: number) {
      if (amount > this.balance) {
        console.log("Insufficient funds!");
      } else {
        this.balance -= amount;
        console.log(`Withdrew ${amount}. Balance: ${this.balance}`);
      }
    }
  }
  
  const accc = new Account(1, "Alice", 500);
  accc.deposit(200);
  accc.withdraw(100);
  