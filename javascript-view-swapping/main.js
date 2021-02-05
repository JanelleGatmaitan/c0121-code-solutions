var $tabContainer = document.querySelector('.tab-container');
var $tabList = document.querySelectorAll('.tab');
var $viewList = document.querySelectorAll('.view');
console.log($viewList);
$tabContainer.addEventListener('click', function (event) {
  if (event.target.matches('.tab')) {
    $tabList.forEach(function (currentValue) {
      if (currentValue === event.target) {
        currentValue.className = 'tab active';
      } else {
        currentValue.className = 'tab';
      }
    });
  }
  if (event.target.matches('div.tab')) {
    var attribute = event.target.getAttribute('data-view');
    console.log(attribute);
    $viewList.forEach(function (currentValue) {

    });
  }
});
