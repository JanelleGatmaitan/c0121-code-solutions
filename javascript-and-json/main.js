var library = [
  {
    isbn: '123',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee'
  },

  {
    isbn: '456',
    title: 'The Scarlet Letter',
    author: 'Nathaniel Hawthorne'
  },

  {
    isbn: '789',
    title: 'The Outsiders',
    author: 'S.E. Hinton'
  }
];
console.log('library: ', library);
console.log('typeof library: ', typeof library);

var libraryString = JSON.stringify(library);
console.log('JSON.stringify: ', libraryString);
console.log('typeof libraryString: ', typeof libraryString);

var student = '{ "name": "Janelle", "id": 1550 }';

console.log('student: ', student);
console.log('typeof student: ', typeof student);

var parsed = JSON.parse(student);
console.log('parsed student: ', parsed);
console.log('typeof parsed: ', typeof parsed);
