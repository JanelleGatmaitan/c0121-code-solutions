/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */
function isUnderFive(number) {
  return number < 5;
}
console.log(isUnderFive(3));

function isEven(number) {
  return number % 2 === 0;
}
console.log(isEven(5));

function startsWithJ(string) {
  return string[0] === 'J';
}
console.log(startsWithJ('hello'));

function isOldEnoughToDrink(person) {
  return person.age >= 21;
}
console.log(isOldEnoughToDrink({ name: 'a', age: 16 }));

function isOldEnoughToDrive(person) {
  return person.age >= 16;
}
console.log(isOldEnoughToDrive({ name: 'a', age: 16 }));

function isOldEnoughToDrinkAndDrive(person) {
  return false;
}
console.log(isOldEnoughToDrinkAndDrive());

function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'neutral';
  } else if ((pH > 7) && (pH < 14)) {
    return 'base';
  } else if ((pH < 7) && (pH > 0)) {
    return 'acidic';
  } else {
    return 'invalid pH level';
  }
}
console.log(categorizeAcidity(1));

function introduceWarnerBro(name) {
  if (name === 'yakko') {
    return "We're the warner brothers!";
  } else if (name === 'wakko') {
    return "We're the warner brothers!";
  } else if (name === 'dot') {
    return "I'm cute~";
  } else {
    return 'Goodnight everybody!';
  }
}
console.log(introduceWarnerBro('lilo'));
