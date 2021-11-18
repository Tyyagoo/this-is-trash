const through = require('through2')

function write(buffer, encoding, next) {
  const str = buffer.toString().toUpperCase();
  this.push(str);
  next();
}

function end(done) {
  done();
}

const stream  = through(write, end);
process.stdin.pipe(stream).pipe(process.stdout);
