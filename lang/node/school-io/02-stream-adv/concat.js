const concat = require('concat-stream');

process.stdin
  .pipe(concat(function (data) {
    const arr = data.toString().split('').reverse();
    // arr.pop();
    process.stdout.write(arr.join(''));
  }));
