var $chevronRight = document.querySelector('.fa-chevron-right');
var $chevronLeft = document.querySelector('.fa-chevron-left');
var $images = document.querySelectorAll('img');
var $circles = document.querySelectorAll('i.fa-circle');
var currentIndex = 1;

function slideRight () {
  for (var i = 0; i < $images.length; i++) {
    $images[i].className = 'slide-hidden';
    $circles[i].className = 'far fa-circle'
  }
  if (currentIndex < $images.length) {
    $images[currentIndex].className = 'current-slide';
    $circles[currentIndex].className = 'fas fa-circle'
    currentIndex++;
  } else {
    $images[0].className = 'current-slide';
    $circles[0].className = 'fas fa-circle'
    currentIndex = 1;
  }
}

$chevronRight.addEventListener('click', slideRight);
