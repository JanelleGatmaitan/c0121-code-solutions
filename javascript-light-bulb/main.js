var timesClicked = 0;

var $buttonOn = document.querySelector('.button-on');
var $backgroundOn = document.querySelector('.background-on');

function lightSwitch(event) {
  timesClicked++;
  var buttonStatus;
  var backgroundStatus;
  if (timesClicked % 2 === 0) {
    buttonStatus = 'button-on';
    backgroundStatus = 'background-on';
  } else {
    buttonStatus = 'button-off';
    backgroundStatus = 'background-off';
  }
  $buttonOn.className = buttonStatus;
  $backgroundOn.className = backgroundStatus;
}

$buttonOn.addEventListener('click', lightSwitch);
