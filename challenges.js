/*
 * AltSchool Assignment - Part B
 * LeetCode-Style Challenges
 *
 * Topics:
 * - Object Literals
 * - Object Cloning
 * - Property Descriptors
 * - this Binding
 * - call()
 * - bind()
 * - Deep Cloning
 */

// Challenge 1: Object Literal & this

const user = {
  name: "Tomiwa",

  greet() {
    return `Hello, my name is ${this.name}.`;
  }
};

console.log("Challenge 1:");
console.log(user.greet());


// Challenge 2: Cloning an Object

const clonedUser = { ...user };

clonedUser.name = "Blessing";

console.log("\nChallenge 2:");
console.log("Original name:", user.name);
console.log("Cloned name:", clonedUser.name);


// Challenge 3: Property Descriptors

const account = {};

Object.defineProperty(account, "balance", {
  value: 5000,
  writable: false,
  enumerable: false,
  configurable: false
});

console.log("\nChallenge 3:");
console.log("Initial balance:", account.balance);

account.balance = 10000;

console.log("Balance after attempted change:", account.balance);
console.log("Account keys:", Object.keys(account));


// Challenge 4: Using call() to Change this

const person1 = {
  name: "Tomiwa"
};

const person2 = {
  name: "Sarah"
};

function introduce() {
  return `My name is ${this.name}.`;
}

console.log("\nChallenge 4:");
console.log(introduce.call(person2));


// Challenge 5: Using bind()

function greetUser() {
  return `Hello, ${this.name}!`;
}

const boundGreet = greetUser.bind(user);

console.log("\nChallenge 5:");
console.log(boundGreet());


// Challenge 6: Deep Cloning

const originalUser = {
  name: "Tomiwa",
  address: {
    city: "Ibadan"
  }
};

const deepClonedUser = structuredClone(originalUser);

deepClonedUser.address.city = "Lagos";

console.log("\nChallenge 6:");
console.log("Original city:", originalUser.address.city);
console.log("Cloned city:", deepClonedUser.address.city);


// Challenge 7: Combining Object Literals, this, call(), and Property Descriptors

const person = {
  name: "Tomiwa",

  greet() {
    return `Hello, ${this.name}.`;
  }
};

Object.defineProperty(person, "id", {
  value: 101,
  writable: false,
  enumerable: false,
  configurable: false
});

const anotherPerson = {
  name: "Sarah"
};

console.log("\nChallenge 7:");
console.log("Person greeting:", person.greet());

console.log(
  "Another person greeting:",
  person.greet.call(anotherPerson)
);

person.id = 202;

console.log("Person ID:", person.id);
console.log("Enumerable properties:", Object.keys(person));