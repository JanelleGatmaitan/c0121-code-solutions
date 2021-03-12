/* exported numVowels */
function numVowels(string) {
  var vowelCounter = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] === 'a' || string[i] === 'A' || string[i] === 'e' || string[i] === 'E' || string[i] === 'i' ||
      string[i] === 'I' || string[i] === 'o' || string[i] === 'O' || string[i] === 'u' || string[i] === 'U') {
      vowelCounter++;
    }
  }
  return vowelCounter;
}
