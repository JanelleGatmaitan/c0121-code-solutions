const express = require('express');
const app = express();
const pg = require('pg');
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.use(express.json());

app.get('/api/grades/', (req, res) => {
  const sql = `
    select *
      from "grades"
  `;
  db.query(sql)
    .then(result => {
      const grades = result.rows;
      res.status(200).json(grades);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.post('/api/grades/', (req, res) => {
  if (!req.body.name || !req.body.course || !req.body.score) {
    res.status(400).json({ error: 'name, course, and score are required fields' });
    return;
  } else if (req.body.score < 1 || req.body.score > 100) {
    res.status(400).json({ error: 'score must be an integer between 1-100' });
    return;
  }

  const sql = `
      insert into "grades" ("name", "course", "score")
      values ($1, $2, $3)
      returning *;
  `;
  const params = [req.body.name, req.body.course, req.body.score];

  db.query(sql, params)
    .then(result => {
      const newGrade = result.rows[0];
      res.status(201).json(newGrade);
    })
    .catch(err => {
      console.error(err)
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.put('/api/grades/:id', (req, res) => {
  const gradeId = parseInt(req.params.id, 10);
  const updatedGrade = req.body;
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
    return;
  } else if (!req.body.name || !req.body.course || !req.body.score) {
    res.status(400).json({ error: 'name, course, and score are required fields' });
    return;
  } else if (req.body.score < 1 || req.body.score > 100) {
    res.status(400).json({ error: 'score must be an integer between 1-100' });
    return;
  }

  const sql = `
  update "grades"
      set "name" = $1,
      "course" = $2,
      "score" = $3
  where "gradeId" = $4
  returning *;
  `;
  const params = [req.body.name, req.body.course, req.body.score, gradeId];

  db.query(sql, params)
  .then(result =>{
    const updatedGrade = result.rows[0];
    if (!updatedGrade) {
      res.status(404).json({ error: `Cannot find grade with id ${gradeId}` });
    } else {
      res.status(200).json(updatedGrade);
    }
  })
  .catch(err =>{
    console.error(err);
    res.status(500).json({ error: 'An unexpected error occurred.'});
  });
});

app.delete('/api/grades/:id', (req, res)=> {
  const gradeId = parseInt(req.params.id, 10);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
    return;
  }

  const sql = `
  delete from "grades"
  where "gradeId" = $1
  returning *;
  `;
  const params = [gradeId];

  db.query(sql, params)
  .then (result => {
    const toDelete = result.rows[0];
    if (!toDelete) {
      res.status(404).json({ error: `Cannot find grade with id ${gradeId}` });
    } else {
      res.status(204).json({ message: 'grade has been deleted' });
    }
  })
  .catch(err =>{
    console.error(err);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  });
});

app.listen(3000, () => {
  console.log('Express server listening on port 3000');
});
