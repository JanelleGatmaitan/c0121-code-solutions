var $heading = document.querySelector('h1');
var countdown = 4;

function changeNumber() {
  countdown--;
  if (countdown > 0) {
    $heading.textContent = countdown;
  } else {
    $heading.textContent = '~Earth Beeeelooowww Us~';
    clearCountdown(timerId);
  }
}

timerId = setInterval(changeNumber, 900);
