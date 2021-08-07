// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;



const previous = Symbol();
const current = Symbol();
class Fib {
  constructor(prev, cur) {
    this[previous] = prev;
    this[current] = cur;
  }
  sum
  next() {
    let a = (this[current] * (1 + Math.sqrt(5))) / 2.0;
    return Math.round(a);
  }
}
let fib = new Fib(1, 2);
let nextfib = fib.next();
console.log(nextfib);
console.log(fib);
//property can be accessed ony if symbol name is known
