const express = require('express');
const app = express();
let grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
};

app.get('/api/grades', function (req, res) {
  let array = [];
  for (const property in grades) {
    let grade = (grades[property]);
    array.push(grade);
  }
  res.json(array);
});

app.delete('/api/grades/:id', function (req, res){
  delete grades[req.params.id];
  res.sendStatus(204);
});

app.listen(3000, () => {
  console.log('Express server listening on port 3000');
});
