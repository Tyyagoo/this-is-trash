const http = require('http');
const bl = require('bl');

function callback(err, data) {
  if (err) return;
  const str = data.toString();
  console.log(str.length);
  console.log(str);
}

const url = process.argv[2];
http.get(url, res => res.pipe(bl(callback)));
