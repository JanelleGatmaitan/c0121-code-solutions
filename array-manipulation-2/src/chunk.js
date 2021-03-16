/* exported chunk */
function chunk(array, size) {
  var newArray = [];
  var subArray = [];
  var nextSubArrayLength = 1;
  var elementsLeft = array.length;
  if (array.length === 0) {
    return newArray;
  } else {
    for (var i = 0; i < array.length; i++) {
      subArray.push(array[i]);
      nextSubArrayLength++
      elementsLeft--;
      if (subArray.length === size) {
        newArray.push(subArray);
        subArray = [];
        nextSubArrayLength = 1;
      } else if (nextSubArrayLength !== size && elementsLeft < size) {
        newArray.push(subArray);
      }
    }
  }
  return newArray;
}
