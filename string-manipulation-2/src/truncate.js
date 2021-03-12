/* exported truncate */
function truncate(length, string) {
  var truncatedString = string.slice(0, length) + '...';
  return truncatedString;
}
