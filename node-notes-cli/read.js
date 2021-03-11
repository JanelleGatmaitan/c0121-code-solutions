// const fs = require('fs');
// const data = require('./data')
// const notes = JSON.stringify(data.notes, null, 2);
const fs = require('fs');
const showNotes = fs.readFile('data.json', 'utf8', (err, data) => {
  const JSONdata = require('./data')
  const notes = JSON.stringify(JSONdata.notes, null, 2);
  if (err) throw err;
  console.log(notes);
});
module.exports = showNotes;
