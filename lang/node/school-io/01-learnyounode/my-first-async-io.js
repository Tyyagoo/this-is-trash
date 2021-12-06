const fs = require('fs');

const cb = (err, data) => {
  if (err) return;
  console.log(data.split('\n').length - 1);
}

fs.readFile(process.argv[2], 'utf8', cb);
