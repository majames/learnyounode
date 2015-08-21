
var http = require('http');
var bl = require('bl');

var req = http.get(process.argv[2], function(response) {
  response.pipe(bl(function(err, data) {
    var resStr = data.toString();
    var numChars = resStr.split('').length;

    console.log(numChars);
    console.log(resStr);
  }));
});