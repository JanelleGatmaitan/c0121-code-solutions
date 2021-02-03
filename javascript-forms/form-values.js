var $contactForm = document.querySelector('#contact-form');

function submitValues(event) {
  event.preventDefault();
  var inputs = $contactForm.elements;
  var nameValue = inputs.name.value;
  var emailValue = inputs.email.value;
  var textareaValue = inputs.message.value;
  var values = { nameValue, emailValue, textareaValue };
  console.log(values);
  $contactForm.reset();
}
$contactForm.addEventListener('submit', submitValues);
