/* exported capitalizeWords */
function capitalizeWords(string) {
  var words = string.split(' ');
  var capitalizedString = '';
  for (var i = 0; i < words.length; i++) {
    if (i === words.length - 1) {
      capitalizedString += capitalizeOneWord(words[i]);
    } else {
      capitalizedString += capitalizeOneWord(words[i]) + ' ';
    }
  }
  return capitalizedString;
}

// function capitalizeWord(word) {
//   var capitalizedWord = '';
//   var checkJS = isJS(word);
//   if (checkJS) {
//     capitalizedWord = 'JavaScript';
//   } else {
//     for (var i = 0; i < word.length; i++) {
//       if (i === 0) {
//         capitalizedWord += word[i].toUpperCase();
//       } else {
//         capitalizedWord += word[i].toLowerCase();
//       }
//     }
//   }
//   return capitalizedWord;
// }
function capitalizeOneWord(word) {
  var capitalizedWord = '';
  for (var i = 0; i < word.length; i++) {
    if (i === 0) {
      capitalizedWord += word[i].toUpperCase();
    } else {
      capitalizedWord += word[i].toLowerCase();
    }
  }
  return capitalizedWord;
}
