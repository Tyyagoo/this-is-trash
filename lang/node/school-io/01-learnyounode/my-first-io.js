const fs = require('fs');

const buffer = fs.readFileSync(process.argv[2]);
const content = buffer.toString();

console.log(content.split('\n').length - 1);

