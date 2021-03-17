const express = require('express');
const parsedNotes = require('./data');
const notes = parsedNotes.notes;
const app = express();

app.use(express.json());

app.get('/api/notes', function (req, res) {
  let array = [];
  for (const id in notes) {
    let note = (notes[id]);
    array.push(note);
  }
  res.json(array);
});

app.get('/api/notes/:id', function (req, res) {
  const noteId = req.params.id;
  res.json(notes[noteId]);
});

app.listen(3000, () => {
  console.log('Express server listening on port 3000');
});
// const noteId = req.params.id;
// console.log('req.params: ', req.params);
// if (noteId != undefined) {
//   res.json(array.noteId);
// } else {
//   res.json(array);
// }
