/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var char1 = string[firstIndex];
  var char2 = string[secondIndex];
  var newString = '';
  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      newString += char2;
    } else if (i === secondIndex) {
      newString += char1;
    } else {
      newString += string[i];
    }
  }
  return newString;
}
