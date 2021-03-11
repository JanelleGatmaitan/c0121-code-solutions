const fs = require('fs');
const toBeCopied = process.argv[2];
const copyTo = process.argv[3];

const copied = fs.readFile(`${toBeCopied}`, 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data)
})


fs.writeFile(`${copyTo}`, `${copied}`, 'utf8', err => {
  if (err) throw err;
})
