var timesClicked = 0;
var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');
function clickIncrement(event) {
  timesClicked++;
  $clickCount.textContent = 'Clicks: ' + timesClicked;
  var temperature;
  if (timesClicked < 4) {
    temperature = 'cold';
  } else if (timesClicked < 7) {
    temperature = 'cool';
  } else if (timesClicked < 10) {
    temperature = ' tepid';
  } else if (timesClicked < 13) {
    temperature = 'warm';
  } else if (timesClicked < 16) {
    temperature = 'hot';
  } else {
    temperature = 'nuclear';
  }
  $hotButton.className = 'hot-button ' + temperature;
}

$hotButton.addEventListener('click', clickIncrement);
