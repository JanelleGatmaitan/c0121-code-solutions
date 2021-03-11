const option = process.argv[2];
const JSONdata = require('./data') // contents have been parsed into JS obj
const fs = require('fs');

if (option === 'read') {
  const showNotes = fs.readFile('data.json', 'utf8', (err, data) => {
    const notes = JSONdata.notes;
    if (err) throw err;
    for (const [key, value] of Object.entries(notes)) {
      console.log(`${key}: ${value}`);
    }
  });
}
