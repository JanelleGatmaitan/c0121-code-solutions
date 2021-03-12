/* exported capitalizeWord */
function capitalizeWord(word) {
  var capitalizedWord = '';
  if (isJS(word)) {
    capitalizedWord = 'JavaScript';
  } else {
    for (var i = 0; i < word.length; i++) {
      if (i === 0) {
        capitalizedWord += word[i].toUpperCase();
      } else {
        capitalizedWord += word[i].toLowerCase();
      }
    }
  }
  return capitalizedWord;
};

function isJS(wordToCheck) {
  return wordToCheck.toLowerCase() === 'javascript';
}
