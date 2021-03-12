/* exported numVowels */
function numVowels(string) {
  var vowels = [];
  for (var i = 0; i < string.length; i++) {
    if (string[i] === 'a' || string[i] === 'A' || string[i] === 'e' || string[i] === 'E' || string[i] === 'i' ||
      string[i] === 'I' || string[i] === 'o' || string[i] === 'O' || string[i] === 'u' || string[i] === 'U') {
      vowels.push(string[i]);
    }
  }
  return vowels.length;
}
