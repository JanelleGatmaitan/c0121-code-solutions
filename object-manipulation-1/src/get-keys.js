/* exported getKeys */
function getKeys(object) {
  var keys = [];
  for (var element in object) {
    keys.push(element);
  }
  return keys;
}
