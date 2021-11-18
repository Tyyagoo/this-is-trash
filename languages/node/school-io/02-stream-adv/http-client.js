const { request } = require('http');

const options = { method: 'POST' };
const req = request('http://localhost:8099', options, handleResponse);

process.stdin.pipe(req);

function handleResponse(res) {
  res.pipe(process.stdout);
}
