var $openModal = document.querySelector('.openButton');
var $textBoxContainer = document.querySelector('.textBoxContainer');
var $overlay = document.querySelector('.overlay');
var $noButton = document.querySelector('.noButton');

$openModal.addEventListener('click', open);

function open(event) {
  $textBoxContainer.className = 'textBoxContainer';
  $overlay.className = 'overlay';
}

$noButton.addEventListener('click', close);
function close(event) {
  $textBoxContainer.className = 'none';
  $overlay.className = 'none';
}
