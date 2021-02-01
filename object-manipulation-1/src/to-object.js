/* exported toObject */
function toObject(keyValuePair) {
  var convertedArray = {};
  var keyName = keyValuePair[0];
  convertedArray[keyName] = keyValuePair[1];
  return convertedArray;
}
