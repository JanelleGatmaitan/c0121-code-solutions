function handleFocus(event) {
  console.log('focus event has been fired');
  console.log('event.target.name: ', event.target.name);
}

function handleBlur(event) {
  console.log('blur event has been fired');
  console.log('event.target.name: ', event.target.name);
}

function handleInput(event) {
  console.log('event.target.name: ', event.target.name);
  console.log('value of name: ', event.target.value);
}
var $userNameInput = document.querySelector('#user-name');
var $emailInput = document.querySelector('#user-email');
var $textarea = document.querySelector('#user-message');

$userNameInput.addEventListener('focus', handleFocus);
$userNameInput.addEventListener('blur', handleBlur);
$userNameInput.addEventListener('input', handleInput);

$emailInput.addEventListener('focus', handleFocus);
$emailInput.addEventListener('blur', handleBlur);
$emailInput.addEventListener('input', handleInput);

$textarea.addEventListener('focus', handleFocus);
$textarea.addEventListener('blur', handleBlur);
$textarea.addEventListener('input', handleInput);
