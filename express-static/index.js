const express = require('express');
const path = require('path');
const app = express();
console.log(__dirname);
const public = path.join(__dirname, 'public');
const files = express.static(public);

app.use(files);

app.listen(3000, () => {
  console.log('Express server listening on port 3000');
});
