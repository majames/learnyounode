var http = require('http');
var t2m = require('through2-map');

var server = http.createServer(function(req, res) {
  if (req.method !== 'POST') {
    return res.end('I only accept post requests!');
  }

  res.writeHead(200, {
    'content-type': 'text/plain'
  });

  req.pipe(t2m(function(chunk) {
    return chunk.toString().toUpperCase();
  })).pipe(res);

});

server.listen(process.argv[2]);