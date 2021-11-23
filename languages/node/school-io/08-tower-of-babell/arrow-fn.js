var inputs = process.argv.slice(2);
var result = inputs
  .map((word) => word[0])
  .reduce((acc, letter) => acc + letter);
console.log(result);
