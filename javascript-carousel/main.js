var $chevronRight = document.querySelector('.fa-chevron-right');
var $chevronLeft = document.querySelector('.fa-chevron-left');
var $images = document.querySelectorAll('img');
var $circles = document.querySelectorAll('i.fa-circle');
var index = 0;
var lastIndex = $images.length - 1;
var $circlesParent = document.querySelector('div:nth-child(2)')

function slideRight() {
  for (var i = 0; i < $images.length; i++) {
    $images[i].className = 'slide-hidden';
    $circles[i].className = 'far fa-circle'
  }
  if (index < lastIndex) {
    $images[index + 1].className = 'current-slide';
    $circles[index + 1].className = 'fas fa-circle'
    index++;
  } else {
    $images[0].className = 'current-slide';
    $circles[0].className = 'fas fa-circle'
    index = 0;
  }
}

function slideLeft() {
  for (var i = 0; i < $images.length; i++) {
    $images[i].className = 'slide-hidden';
    $circles[i].className = 'far fa-circle';
  }
  if (index > 0) {
    $images[index - 1].className = 'current-slide';
    $circles[index - 1].className = 'fas fa-circle'
    index--;
  } else {
    $images[lastIndex].className = 'current-slide';
    $circles[lastIndex].className = 'fas fa-circle'
    index = lastIndex;
  }
}

function progressDot(event) {
  if (event.target && event.target.matches('i.fa-circle')) {
    for (var i = 0; i < $images.length; i++) {
      $images[i].className = 'slide-hidden';
      $circles[i].className = 'far fa-circle';
      if ($images[i].getAttribute('picture-id-number') === $circles[i].getAttribute('picture-id-number') {
        $images[i].className = 'current-slide';
        $circles[i].className = 'fas fa-circle'
      }
    }
  }
}

$chevronRight.addEventListener('click', slideRight);
$chevronLeft.addEventListener('click', slideLeft);
$circlesParent.addEventListener('click', progressDot);

// for (var j = 0; j < $images.length; j++) {
//   if ($images[j].getAttribute('picture-id-number') === $circles[j].getAttribute('picture-id-number')) {
//     $images[j].className = 'current-slide';
//     $circles[j].className = 'fas fa-circle'
//   }
// }
