const fs = require('fs');

fs.readdir(process.argv[2], function (err, files) {
  if (err) return;
  
  const ext = process.argv[3];
  const filtered = files.filter(file => {
    const fragments = file.split('.');
    return fragments.length !== 1 && ext === fragments[fragments.length - 1];
  });
  
  filtered.forEach(file => console.log(file));
})
