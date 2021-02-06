var $ul = document.querySelector('.task-list');

$ul.addEventListener('click', function (event) {

  console.log('event.target: ', event.target);
  console.log('event.target.tagName: ', event.target.tagName);

  if (event.target.tagName === 'BUTTON') {
    var closestElement = event.target.closest('.task-list-item');
    console.log('closest .task-list-item: ', closestElement);
    closestElement.remove();
  }
});
