console.log('hello, world');
var heading = document.querySelector('h1');
console.log('heading DOM: ', heading);
console.dir(heading);
var explanation = document.querySelector('#explanation');
console.log('explanation DOM: ', explanation);
console.dir(explanation);
var hint = document.querySelector('.hint');
console.log('hint DOM: ', hint);
console.dir(hint);
var paragraph = document.querySelectorAll('p');
console.log('paragraph nodelist: ', paragraph);
var exampleLink = document.querySelectorAll('.example-link');
console.log('exampleLinks nodelist: ', exampleLink);