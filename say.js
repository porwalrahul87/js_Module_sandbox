export default class   { // just add "default"
  constructor(name) {
    this.name = name;
  }
}

export function sayHi(user) {
  alert(`Hello, ${user}!`);
}

export function sayBye(user) {
  alert(`Bye, ${user}!`);
}