const through = require('through2');
const duplexer = require('duplexer2');

module.exports = function (counter) {
  const obj = {}
  const stream = through.obj(write, end);

  function write(chunk, _, next) {
    obj[chunk.country] = (obj[chunk.country] ?? 0) + 1;
    next();
  }

  function end(done) {
    counter.setCounts(obj);
    done();
  }
  return duplexer({ objectMode: true }, stream, counter);
}
