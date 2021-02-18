var $chevronRight = document.querySelector('.fa-chevron-right');
var $chevronLeft = document.querySelector('.fa-chevron-left');
var $images = document.querySelectorAll('img');
var currentIndex = 1;

function slideRight () {
  console.log('yeet');
  for (var i = 0; i < $images.length; i++) {
    $images[i].className = 'slide-hidden';
  }
  if (currentIndex < $images.length) {
    $images[currentIndex].className = 'current-slide';
    currentIndex++;
  } else {
    $images[0].className = 'current-slide';
    currentIndex = 1;
  }
}

$chevronRight.addEventListener('click', slideRight);
