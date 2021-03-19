const takeAChance = require('./take-a-chance');
const promise = takeAChance('Janelle');
const result = promise
  .then((success) => {
  console.log(success);
})

  .catch((error) => {
    console.log(error.message);
  });
