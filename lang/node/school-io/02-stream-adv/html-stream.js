const trumpet = require('trumpet');
const through = require('through2');

const tr = trumpet();
process.stdin.pipe(tr);

const stream = tr.select('.loud').createStream();
stream.pipe(through(write, end)).pipe(stream);

tr.pipe(process.stdout);

function write(chunk, encoding, next) {
  this.push(chunk.toString().toUpperCase());
  next();
}

function end(done) {
  done();
}
