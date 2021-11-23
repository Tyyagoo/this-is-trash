const concat = require('concat-stream');
const tar = require('tar');
const crypto = require('crypto');

const alg = process.argv[2];
const key = process.argv[3];
const iv = process.argv[4];

const parser = new tar.Parse();

parser.on('entry', function (e) {
  if (e.type === "Directory") return e.resume();

  const hasher = crypto.createHash('md5', { encoding: 'hex' });
  e.pipe(hasher).pipe(concat(function (hash) {
    console.log(`${hash} ${e.path}`);
  }));
});

process.stdin.pipe(crypto.createDecipheriv(alg, key, iv)).pipe(parser);
