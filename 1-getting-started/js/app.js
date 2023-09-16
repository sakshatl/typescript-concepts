"use strict";
class User {
    constructor(name) {
        this.name = name;
    }
    sayName() {
        return `Hello, my name is ${this.name}`;
    }
}
class AdminUser extends User {
    constructor(name) {
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
if (textElement) {
    let message = user1.sayName();
    textElement.textContent = message;
}
