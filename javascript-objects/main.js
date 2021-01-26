var student = {
  firstName: 'Janelle',
  lastName: 'Gatmaitan'
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName: ' + fullName);
student.livesInIrvine = false;
student.previousOccupation = 'cashier';
console.log('value of student.livesInIrvine: ' + student.livesInIrvine);
console.log('value of student.previousOccupation: ' + student.previousOccupation);
console.log('value of student: ', student);

var vehicle = {
  make: 'Toyota',
  model: 'Corolla',
  year: 1999
};

vehicle["color"] = 'red';
vehicle["isConvertible"] = false;
console.log("value of vehicle['color']: " + vehicle['color']);
console.log("value of vehicle['isCovertible']: " + vehicle["isConvertible"]);
console.log('value of vehicle: ', vehicle);

var pet = {
  name: 'Sonic',
  type: 'hedgehog'
};

delete pet.name;
delete pet.type;

console.log('value of pet: ', pet);
