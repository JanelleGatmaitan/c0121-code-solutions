var $body = document.querySelector('body');
var $span = document.querySelectorAll('span');
var index = 0;
$span[0].className = 'underlined';

$body.addEventListener('keydown', function (event) {
  if ((event.key === $span[index].textContent) || (event.key.charCodeAt(0) == 32 && $span[index].textContent.charCodeAt(0) == 160)) {
    $span[index].className = 'right';
    index++;
    if (index < $span.length) {
      $span[index].className = 'underlined';
    }
  } else {
    $span[index].className = 'error';
  }
});
