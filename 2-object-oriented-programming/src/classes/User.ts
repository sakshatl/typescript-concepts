class User {
  username: string;

  constructor(username: string) {
    this.username = username;
  }

  printUsername() {
    return this.username;
  }
}

class AdminUser extends User {
  constructor(username: string) {
    super(username);
  }
}