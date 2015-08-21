// read and print number of newlines contained in file to console

var fs = require('fs');

var PATH_INDEX = 2;

var buffer = fs.readFileSync(process.argv[PATH_INDEX]);
var text = buffer.toString();
var lines = text.split('\n');

console.log(lines.length - 1);