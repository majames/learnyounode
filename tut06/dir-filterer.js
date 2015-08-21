var fs = require('fs');
var path = require('path');

module.exports = function(dir, ext, fn) {
  fs.readdir(dir, function(err, fileNames) {
    var filteredFileNames;

    if (err) {
      fn(err);
      return;
    }

    filteredFileNames = fileNames.filter(function(fileName) {
      return path.extname(fileName) === '.' + ext;
    });

    fn(null, filteredFileNames);
  });
};