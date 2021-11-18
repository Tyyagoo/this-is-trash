const filtered_ls = require('./mymodule');

function logFiles(err, ls) {
  if (err) return;
  ls.forEach(file => console.log(file));
}
filtered_ls(process.argv[2], process.argv[3], logFiles);
