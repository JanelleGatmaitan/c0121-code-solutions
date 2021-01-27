function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}
var convertMinutesToSecondsResult = convertMinutesToSeconds(2);
console.log('convertMinutesToSecondsResult: ', convertMinutesToSecondsResult);

function greet(name) {
  var greeting = 'Hey ' + name;
  return greeting;
}
var greetingResult = greet('Janelle');
console.log('greetResult: ', greetingResult);

function getArea(width, height) {
  var area = width * height;
  return area;
}
var getAreaResult = getArea(5, 5);
console.log('getAreaResult: ', getAreaResult);

function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}
var firstNameResult = getFirstName({ firstName: 'Janelle', lastName: 'Gatmaitan' });
console.log('firstNameResult: ', firstNameResult);

function getLastElement(array) {
  var lastElement = array[array.length - 1];
  return lastElement;
}
var lastElementResult = getLastElement(['red', 'orange', 'yellow']);
console.log('getLastElementResult: ', lastElementResult);
