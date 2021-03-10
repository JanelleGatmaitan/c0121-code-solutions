const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

let num1 = Number(process.argv[2]);
let num2 = Number(process.argv[4]);

if (process.argv[3] === 'plus') {
  let result = add(num1, num2);
  console.log('result: ', result)
} else if (process.argv[3] === 'minus') {
  let result = subtract(num1, num2);
  console.log('result: ', result)
} else if (process.argv[3] === 'over') {
  let result = divide(num1, num2);
  console.log('result: ', result)
} else if (process.argv[3] === 'times') {
  let result = multiply(num1, num2);
  console.log('result: ', result)
}
