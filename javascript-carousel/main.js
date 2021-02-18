var $chevronRight = document.querySelector('.fa-chevron-right');
var $chevronLeft = document.querySelector('.fa-chevron-left');
var $images = document.querySelectorAll('img');
var $circles = document.querySelectorAll('i.fa-circle');
var index = 0;
var lastIndex = $images.length - 1;

function slideRight () {
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
    $circles[i].className = 'far fa-circle'
    console.log('loop');
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


$chevronRight.addEventListener('click', slideRight);
$chevronLeft.addEventListener('click', slideLeft);
  // } else if (currentIndex = 0) {
  // console.log('yeet');
  // currentIndex = $images.length - 1;
  // $images[currentIndex].className = 'current-slide';
  // $circles[currentIndex].className = 'fas fa-circle'
  // currentIndex--;
// }
