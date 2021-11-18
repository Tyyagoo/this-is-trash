const fs = require('fs');

module.exports = function (path, ext, cb) {
  function callback(err, files) {
     if (err) return cb(err);
     const filtered = files.filter(file => {
        const fragments = file.split('.');
        return fragments.length !== 1 && fragments[fragments.length - 1] === ext;
     });
     
     return cb(false, filtered);
  }

  fs.readdir(path, callback);
}

