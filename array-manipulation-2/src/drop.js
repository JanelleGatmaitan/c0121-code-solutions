/* exported drop */
function drop(array, count) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array.indexOf(array[i]) >= count) {
    newArray.push(array[i]);
    }
  }
  return newArray;
}

// for (var i = 0; i < count; i++) {
//   delete array[i];
// }
// return array;

// for (var i = 0; i < array.lenth; i++) {
//   if
// }
// array.forEach(function checkElement(element) {
//   if (array.indexOf(element) >= count) {
//     newArray.push(element);
//   }
// });
