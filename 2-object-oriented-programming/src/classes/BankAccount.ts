abstract class BankAccount {
  private _balance: number;
  firstName: string;
  lastName: string;
  age: number;
  accountNumber: string;

  constructor(firstName: string, lastName: string, age: number) {
    this._balance = 0;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.accountNumber = this.generateAccountNumber(firstName, lastName);
  }

  private generateAccountNumber(firstName: string, lastName: string) {
    // generate a random 5 digit number
    const randomFiveDigits = Math.floor(10000 + Math.random() * 90000);
    const firstTwoLetters = firstName.slice(0, 2).toUpperCase();
    const lastTwoLetters = lastName.slice(0, 2).toUpperCase();

    return `BANK-${firstTwoLetters}${lastTwoLetters}${randomFiveDigits}`;
  }

  deposit(value: number) {
    if(value > 0) {
      this._balance = this._balance + value;
    }
  }

  withdraw(value: number) {
    if(value > 0 && value < this._balance) {
      this._balance = this._balance - value;
    }
  }

  printBalance() {
    return this._balance;
  }
}

export class SavingsAccount extends BankAccount {
  constructor(firstName: string, lastName: string, age: number) {
    super(firstName, lastName, age);
  }
}

export class CurrentAccount extends BankAccount {
  constructor(firstName: string, lastName: string, age: number) {
    super(firstName, lastName, age);
  }
}