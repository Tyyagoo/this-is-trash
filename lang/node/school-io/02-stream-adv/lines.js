const split2 = require('split2')
const through2 = require('through2')

let cont = 1;

function write(buffer, encoding, next) {
  const line = cont % 2 === 0 ? buffer.toString().toUpperCase() : buffer.toString().toLowerCase();
  this.push(line + '\n');
  cont++;
  next();
}

function end(done) {
  done();
}

process.stdin
  .pipe(split2())
  .pipe(through2(write, end))
  .pipe(process.stdout);
