/* exported filterOutStrings */
function filterOutStrings(values) {
  var filteredArray = [];
  for (i = 0; i < values.length; i++) {
    if (typeof values[i] === 'number') {
      filteredArray.push(values[i]);
    }
  }
  return filteredArray;
}
