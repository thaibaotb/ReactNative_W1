interface Payment {
    pay(amount: number): void;
  }
  
  class CashPayment implements Payment {
    pay(amount: number): void {
      console.log(`Paid ${amount} in cash`);
    }
  }
  
  class CardPayment implements Payment {
    pay(amount: number): void {
      console.log(`Paid ${amount} by card`);
    }
  }
  
  const pay1: Payment = new CashPayment();
  pay1.pay(100);
  
  const pay2: Payment = new CardPayment();
  pay2.pay(200);
  