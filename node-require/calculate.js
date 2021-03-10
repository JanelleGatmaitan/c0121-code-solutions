const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

let num1 = Number(process.argv[2]);
let num2 = Number(process.argv[4]);

if (process.argv[3] === 'plus') {
  add(num1, num2);
} else if (process.argv[3] === 'minus') {
  subtract(num1, num2);
} else if (process.argv[3] === 'over') {
  divide(num1, num2);
} else if (process.argv[3] === 'times') {
  multiply(num1, num2);
}
