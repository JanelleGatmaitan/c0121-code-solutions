/* exported pick */
function pick(source, keys) {
  let newObject = {};
  for (var i =0; i < keys.length; i++) {
    if (source.hasOwnProperty(keys[i]) && source[keys[i]] !== undefined) {
      newObject[keys[i]] = source[keys[i]];
    }
  }
  return newObject;
}
