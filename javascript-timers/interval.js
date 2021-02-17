var $heading = document.querySelector('h1');
function changeNumber() {
  if ($heading.textContent === '4') {
    $heading.textContent = '3';
  } else if ($heading.textContent === '3') {
    $heading.textContent = '2';
  } else if ($heading.textContent === '2') {
    $heading.textContent = '1';
  } else {
    $heading.textContent = '~Earth Beeeelooowww Us~'
    clearCountdown();
  }
}

function countdown() {
  setInterval(changeNumber, 1000);
}

var startCountdown = countdown();

function clearCountdown() {
  clearInterval(startCountdown);
}
