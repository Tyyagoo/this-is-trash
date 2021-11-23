const split2 = require('split2');
const through2 = require('through2');
const combine = require('stream-combiner')
const zlib = require('zlib');

module.exports = function () {
  let lastGenre;
  const list = [];

  return combine(
    split2(),
    through2.obj(write, end),
    zlib.createGzip(),
  );

  function write(chunk, _, next) {
    if (chunk.type === "genre") { lastGenre = chunk.type; }
    else {
      const obj = list.filter(o => o.name === lastGenre)[0] ?? {}
      obj.books = obj.books ? [...obj.books, chunk.name] : [chunk.name];
    }
    next();
  }

  function end(done) {
     done();
  }
}

