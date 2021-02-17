var heading = document.querySelector('h1');
function headingText () {
  heading.textContent = 'Hello There';
}
function changeHeading () {
  setTimeout(headingText, 2*1000);
}
changeHeading();
