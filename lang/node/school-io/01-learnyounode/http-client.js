const http = require('http');

function onData(data) {
  console.log(data);
}

function onError(err) { }

function onEnd() { }

function handleResponse(response) {
  response.setEncoding('utf8');
  response.on('data', onData);
  response.on('error', onError);
  response.on('end', onEnd);
}

const url = process.argv[2];
http.get(url, handleResponse);
