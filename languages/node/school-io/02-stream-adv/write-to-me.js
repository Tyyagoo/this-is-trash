const { Writable } = require('stream');

const writable = new Writable({
  write(chunk, encoding, callback) {
    const str = chunk.toString();
    console.log("writing: " + str);
    callback();
  }
});

process.stdin.pipe(writable);

