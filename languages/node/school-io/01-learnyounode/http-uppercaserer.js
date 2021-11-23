const http = require('http');
const map = require('through2-map')

const port = process.argv[2];
const server = http.createServer((req, res) => {
  req.pipe(map(uppercaserer)).pipe(res);
  req.on('end', () => res.end());
});

// setMaxListeners(100); // that's probably cheating xD
server.listen(port);

function uppercaserer(data) {
  console.log(data.toString());
  return data.toString().toUpperCase();
}
