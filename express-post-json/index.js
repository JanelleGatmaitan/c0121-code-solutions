const express = require('express');
const app = express();
let nextId = 1;
let grades = {};

app.use(express.json());

app.get('/api/grades', (req, res) => {
  let gradesArray = [];
  for (const id in grades) {
    let grade = (grades[id]);
    gradesArray.push(grade);
  }
  res.json(gradesArray);
});

app.post('/api/grades', (req, res) => {
  let newGrade = req.body;
  let id = nextId++
  newGrade.id = id;
  grades[id] = newGrade;
  res.status(201);
  res.json(newGrade);
});

app.listen(3000, () => {
  console.log('Express server listening on port 3000');
});
