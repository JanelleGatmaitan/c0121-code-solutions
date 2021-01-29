/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var appendedWords = [];
  for (i = 0; i < words.length; i++) {
    appendedWords.push(words[i] + suffix);
  }
  return appendedWords;
}
