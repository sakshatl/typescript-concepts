import { Account } from './classes/Account';
import { SavingsAccount } from './classes/BankAccount';

const account1 = new Account("Sakshat", "Lidhoo");
const accout2 = new Account("Foo", "Bar");
const accout3 = new Account("Sarah", "Johnes");

const accounts = [account1, accout2, accout3];

const savingsAccount1 = new SavingsAccount("Sakshat", "Lidhoo", 25);

function renderUI() {
  const rootElem = document.getElementById('root');
  
  const renderAccountList = (accounts: Account[]) => {
    let accountList = document.createElement("div");

    for(let i = 0; i < accounts.length; i++) {
      let account = accounts[i];
      let firstName = (account as { firstName: string })?.firstName;
      let lastName = (account as { lastName: string })?.lastName;
      let balance = (account as { printBalance: () => {} })?.printBalance();

      let html = `
        <div>
          <div>Name: ${firstName} ${lastName}</div>
          <div>Balance: ${balance}</div>
        </div>
      `;

      accountList.innerHTML += html;
    }

    rootElem?.appendChild(accountList);
  }
  
  if(rootElem) {
    renderAccountList(accounts);
  }
}

renderUI();