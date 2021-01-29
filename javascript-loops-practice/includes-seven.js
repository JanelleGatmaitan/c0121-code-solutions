/* exported includesSeven */
function includesSeven(array) {
  var x = false;
  for (i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      x = true;
    } else {
      x = false;
    }
  }
  return x;
}
