class User {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  sayName() {
    return `Hello, my name is ${this.name}`;
  }
}

class AdminUser extends User {
  isAdmin: boolean

  constructor(name: string) {
    super(name);
    this.isAdmin = true;
  }

  sayAdminName() {
    return `Hello, my name is ${this.name}. I am an admin`;
  }
}

const user1 = new User("Sakshat");
const user2 = new AdminUser("Kakashi");

let textElement = document.querySelector('#text');
if(textElement) {
  let message = user1.sayName();
  textElement.textContent = message;
}

