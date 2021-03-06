function countWords(inputWords) {
  return inputWords.reduce((obj, word) => ({...obj, [word]: (obj[word] ?? 0) + 1 }), {});
}

module.exports = countWords

