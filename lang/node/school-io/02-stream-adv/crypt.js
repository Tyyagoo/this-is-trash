const crypto = require('crypto');

const key = process.argv[2];
const iv = process.argv[3];

const decrypt = crypto.createDecipheriv('aes256', key, iv);

process.stdin.pipe(decrypt).pipe(process.stdout);
