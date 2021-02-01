/* exported capitalize */
function capitalize(string) {
  var letters = string.split('');
  var newString = letters[0].toUpperCase();
  for (var i = 1; i < letters.length; i++) {
    if (letters[i] !== 0) {
      newString += letters[i].toLowerCase();
    }
  }
  return newString;
}
