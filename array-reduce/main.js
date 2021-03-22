const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];


const sum = numbers.reduce((accumulator, currentValue) => {return accumulator + currentValue});
console.log('sum: ', sum);

const product = numbers.reduce((accumulator, currentValue) => accumulator * currentValue);
console.log('product: ', product);

let initialValue = 0;
const balanceReducer = (prevBalance, currentValue) => {
  if (currentValue.type === 'deposit') {
    return prevBalance + currentValue.amount;
  } else {
    return prevBalance - currentValue.amount;
  }
}
const balance = account.reduce(balanceReducer, initialValue);
console.log('balance: ', balance);

const compositeReducer = (accumulator, currentValue) => {
  return Object.assign(currentValue, accumulator)
}
const composite = traits.reduce(compositeReducer);
console.log('composite: ', composite);
