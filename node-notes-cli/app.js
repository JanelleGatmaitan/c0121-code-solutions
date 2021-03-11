const option = process.argv[2];
const parsedData = require('./data');
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
  const newNote = process.argv[3];
  let nextId = parsedData.nextId;
  notes[`${nextId}`] = newNote;
  nextId++;
  parsedData.nextId = nextId;
  const updatedNotesJSON = JSON.stringify(parsedData, null, 2)
  fs.writeFile('data.json', `${updatedNotesJSON}`, 'utf8', err => {
    if (err) throw err;
  });
} else if (option === 'delete') {
  const toDelete = process.argv[3];
  delete notes[`${toDelete}`];
  const updatedNotesJSON = JSON.stringify(parsedData, null, 2)
  fs.writeFile('data.json', `${updatedNotesJSON}`, 'utf8', err => {
    if (err) throw err;
  });
} else if (option === 'update') {
  const toUpdate = process.argv[3];
  const editedNote = process.argv[4];
  notes[`${toUpdate}`] = editedNote;
  const updatedNotesJSON = JSON.stringify(parsedData, null, 2)
  fs.writeFile('data.json', `${updatedNotesJSON}`, 'utf8', err => {
    if (err) throw err;
  });
} else {
  console.log('invalid option');
}
