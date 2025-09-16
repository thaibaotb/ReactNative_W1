// 5. BankAccount class
class BankAccount {
    constructor(public balance: number = 0) {}
  
    deposit(amount: number) {
      this.balance += amount;
      console.log(`Deposited ${amount}, New Balance: ${this.balance}`);
    }
  
    withdraw(amount: number) {
      if (amount > this.balance) {
        console.log("Insufficient funds!");
      } else {
        this.balance -= amount;
        console.log(`Withdrew ${amount}, New Balance: ${this.balance}`);
      }
    }
  }
  
  const acc = new BankAccount(100);
  acc.deposit(50);
  acc.withdraw(30);
  acc.withdraw(200);