let number = 3;
function countdown (count) {
  if (number > 0) {
    console.log(number);
    number--
  } else {
    console.log('Blast off!');
    clearInterval(timerID);
  }
};

const timerID = setInterval(countdown, 1000);
