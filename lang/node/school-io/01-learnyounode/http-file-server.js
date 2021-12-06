const fs = require('fs');
const http = require('http');

const port = process.argv[2];
const file = process.argv[3];
const server = http.createServer(requestHandler);
server.listen(port);

function requestHandler(req, res) {
  const stream = fs.createReadStream(file);
  stream.on('error', (err) => res.end(err));
  stream.on('open', () => stream.pipe(res));
  stream.on('end', () => res.end());
}



