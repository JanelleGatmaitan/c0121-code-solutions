/* exported getValues */
function getValues(object) {
  var values = [];
  for (var element in object) {
    values.push(object[element]);
  }
  return values;
}
