const express = require('express');
const parsedNotes = require('./data');
const notes = parsedNotes.notes;
const app = express();
app.use(express.json());

// let file = process.argv[2];
// fs.readFile(`${file}`, 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// // });
// app.get('/api/notes', (req, res) => {
//   const showNotes = fs.readFile('data.json', 'utf8', (err, data) => {
//     if (err) throw err;
//     for (const [key, value] of Object.entries(notes)) {
//       console.log(`${key}: ${value}`);
//     }
// });

app.get('/api/notes', function (req, res) {
  let array = [];
  for (const id in notes) {
    let note = (notes[id]);
    array.push(note);
  }
  res.json(array);
});

app.listen(3000, () => {
  console.log('Express server listening on port 3000');
});
