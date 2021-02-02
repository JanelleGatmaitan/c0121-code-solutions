/* exported reverse */
function reverse(array) {
  var newArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    newArray = newArray.concat(array[i]);
  }
  return newArray;
}
