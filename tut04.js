// print number of new line characters to console

var fs = require('fs');

var PATH_INDEX = 2;

fs.readFile(process.argv[PATH_INDEX], function(err, bufferData) {
  var text = bufferData.toString();
  var lines = text.split('\n');

  console.log(lines.length - 1);
});