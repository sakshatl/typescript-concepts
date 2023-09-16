export class Account {
  private _balance;
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this._balance = 2000;
  }

  printBalance() {
    return this._balance;
  }

  deposit(value: number) {
    this._balance = this._balance + value;
  }

  withdraw(value: number) {
    this._balance = this._balance - value;
  }
}