const express = require('express');
const parsedNotes = require('./data');
const notes = parsedNotes.notes;
const app = express();
const fs = require('fs');

app.use(express.json());

app.get('/api/notes', function (req, res) {
  let Notesarray = [];
  for (const id in notes) {
    let note = (notes[id]);
    Notesarray.push(note);
  }
  res.json(Notesarray);
});

app.get('/api/notes/:id', function (req, res) {
  const noteId = req.params.id;
  if (noteId < 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!notes[noteId]) {
    res.status(404).json({ error: `cannot find note with id ${noteId}` });
  } else {
    res.status(200).json(notes[noteId]);
  }
});

app.post('/api/notes', (req, res) => {
  if (!req.body.content) {
    res.status(400).json({ error: 'content is a required field' });
  } else if (req.body.content) {
    const newNote = req.body;
    const newNoteId = parsedNotes.nextId++;
    newNote.id = newNoteId;
    notes[newNoteId] = newNote;
    const updatedNotesJSON = JSON.stringify(parsedNotes, null, 2);
    fs.writeFile('data.json', `${updatedNotesJSON}`, 'utf8', err => {
      if (err) {
        console.error(err);
        res.status(500).json({ "error": "An unexpected error occurred." });
      } else {
        res.status(201).json(newNote);
      }
    });
  }
});

app.delete('/api/notes/:id', function (req, res) {
  const noteId = req.params.id;
  if (noteId < 0) {
    res.status(404).json({ error: 'id must be a positive integer' });
  } else if (!notes[noteId]) {
    res.status(404).json({ error: `cannot find note with id ${noteId}` });
  } else {
    delete notes[noteId];
    const updatedNotesJSON = JSON.stringify(parsedNotes, null, 2);
    fs.writeFile('data.json', `${updatedNotesJSON}`, 'utf8', err => {
      if (err) {
        console.error(err);
        res.status(500).json({ "error": "An unexpected error occurred." });
      } else {
        res.status(204).json();
      }
    });
  }
});

app.put('/api/notes/:id', function (req, res) {
  const noteId = req.params.id;
  if (noteId < 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!notes[noteId]) {
    res.status(404).json({ error: `cannot find note with id ${noteId}` });
  } else {
    if (!req.body.content) {
      res.status(400).json({ error: 'content is a required field' });
    } else {
      const editedNote = req.body.content;
      notes[noteId].content = editedNote;
      const updatedNotesJSON = JSON.stringify(parsedNotes, null, 2);
      fs.writeFile('data.json', `${updatedNotesJSON}`, 'utf8', err => {
        if (err) {
          res.status(500).json({ "error": "An unexpected error occurred." });
        } else {
          res.status(200).json(notes[noteId]);
        }
      });
    }
  }
});

app.listen(3000, () => {
  console.log('Express server listening on port 3000');
});
