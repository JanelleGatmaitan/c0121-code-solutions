const option = process.argv[2];
const parsedData = require('./data') // contents have been parsed into JS obj
const notes = parsedData.notes;
const fs = require('fs');


if (option === 'read') {
  const showNotes = fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) throw err;
    for (const [key, value] of Object.entries(notes)) {
      console.log(`${key}: ${value}`);
    }
  });
} else if (option === 'create') {
  console.log('note is being made');
  const newNote = process.argv[3];
  let nextId = parsedData.nextId;
  notes[`${nextId}`] = newNote;
  nextId++;
  parsedData.nextId = nextId;
  const updatedNotesJSON = JSON.stringify(parsedData, null, 2)
  fs.writeFile('data.json', `${updatedNotesJSON}`, 'utf8', err => {
    if (err) throw err;
  });
}
