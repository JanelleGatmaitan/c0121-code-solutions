var num1 = 50;
var num2 = 1000;
var num3 = 800;
var maximumValue = Math.max(num1, num2, num3);
console.log('maximumValue: ', maximumValue);
var heroes = ['SpiderMan', 'AntMan', 'Captain America', 'Starlord'];
var randomNumber = Math.random();
var randomNumber = randomNumber * heroes.length;
console.log('randomNumer: ', randomNumber);
var randomIndex = Math.floor(randomNumber);
console.log('randomIndex: ', randomIndex);
var randomHero = heroes[randomIndex];
console.log('randomHero: ', randomHero);

var library = [
  { title: 'If Your Give a Pig a Pancake', author: 'Laura Numeroff' },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' }
];
var lastBook = library.pop();
console.log('lastBook: ', lastBook);
var firstBook = library.shift();
console.log('firstBook: ', firstBook);
var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
}
;
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library: ', library);

var fullName = 'Janelle Gatmaitan';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName: ', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName: ', sayMyName);
