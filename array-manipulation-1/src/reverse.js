/* exported reverse */
debugger;
function reverse(array) {
  var newArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    newArray = newArray.concat(array[i]);
  }
  return newArray;
}
reverse([1, 2, 3]);
