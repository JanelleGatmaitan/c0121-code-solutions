/* exported invert */
function invert(source) {
  let newObject = {};
  for (const property in source) {
    newObject[source[property]] = property;
  }
  return newObject;
}
