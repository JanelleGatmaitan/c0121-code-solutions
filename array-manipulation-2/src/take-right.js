/* exported takeRight */
function takeRight(array, count) {
  var newArray = [];
  if (array.length === 0) {
    return newArray;
  }
  for (var i = array.length - 1; i < array.length; i--) {
    newArray.unshift(array[i]);
    if (newArray.length >= count) {
      break;
    }
  }
  return newArray;
}
