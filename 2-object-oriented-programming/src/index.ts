import { Account } from './scripts/Account';

const account1 = new Account("Sakshat", "Lidhoo");
const accout2 = new Account("Foo", "Bar");
const accout3 = new Account("Sarah", "Johnes");

const accounts = [account1, accout2, accout3];

// Render UI logic
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