var http = require('http');
var fs = require('fs');

var portNumber = process.argv[2];
var filePath = process.argv[3];

var server = http.createServer(function(req, res) {
  var fileStream = fs.createReadStream(filePath);

  res.writeHead(200, {
    'content-type': 'text/plain'
  });
  fileStream.pipe(res);
});

server.listen(portNumber);