// print dir filtered by extension

var fs = require('fs');
var path = require('path');

var pathStr = process.argv[2];
var extension = process.argv[3];

fs.readdir(pathStr, function(err, fileNames) {
  var matchedFiles = fileNames.filter(function(fileName) {
    return path.extname(fileName) === '.' + extension;
  });

  console.log(matchedFiles.join('\n'));
});