/* exported tail */
function tail(array) {
  var newArray = [];
  for (var i = 1; i < array.length; i++) {
    newArray = newArray.concat(array[i]);
  }
  return newArray;
}
