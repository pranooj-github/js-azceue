// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
// let myMap = new Map([['fname', 'chandler'], ['lname', 'bing']]);
// for (let key of myMap.keys()) {
//   console.log(key);
// }

// for (let value of myMap.values()) {
//   console.log(value);
// }
// //both values and key

// for (let [key, value] of myMap.entries()) {
//   console.log(`${key}->${value}`);
// }
// let a = Symbol();
// console.log(a);
let previous = Symbol();
let current = Symbol();
class Fib {
  constructor(prev, cur) {
    this[previous] = prev;
    this[current] = cur;
  }

  next() {
    let sum = 0;
    sum = this[previous] + this[current];
    this[previous] = this[current];
    this[current] = this.sum;
    return sum;
  }
}
let fib = new Fib(1, 2);
let nextfib = fib.next();
console.log(nextfib);
