var fs = require("fs");

function run(generator) {
  let it = generator(done);

  function done(err, result) {
    it.next(result);
  }

  done();
}

run(function* (done) {
  var firstFile;
  try {
    var dirFiles = yield fs.readdir("NoNoNoNo", done);
    firstFile = dirFiles[0];
  } catch {
    firstFile = null;
  }

  console.log(firstFile);
});
