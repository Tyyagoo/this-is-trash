const http = require('http')
const through = require('through2');

const port = process.argv[2];

const server = http.createServer(requestHandler);
server.listen(port);

function requestHandler(req, res) {
  req.pipe(through(write, end)).pipe(res);
}

function write(chunk, encoding, next) {
  this.push(chunk.toString().toUpperCase());
  next();
}

function end(done) {
  done();
}
