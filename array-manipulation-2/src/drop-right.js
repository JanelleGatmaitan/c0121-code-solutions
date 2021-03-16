/* exported dropRight */
function dropRight(array, count) {
  var newArray = [];
  var newLength = array.length - count;
  if (array.length === 0) {
    return newArray;
  }
  for (var i = 0; i < array.length; i++) {
    newArray.push(array[i]);
    if (newArray.length === newLength) {
      break;
    }
  }
  return newArray;
}
