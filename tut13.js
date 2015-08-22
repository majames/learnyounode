var http = require('http');
var url = require('url');

var parseDate = function(urlObj) {
  return new Date(urlObj.query.iso);
};

var successHeader = function() {
  return {
    'content-type': 'application/json'
  };
};

var server = http.createServer(function(req, res) {
  var urlObj = url.parse(req.url, true);
  var date;

  if (/parsetime$/.exec(urlObj.pathname)) {
    date = parseDate(urlObj);
    res.writeHead(200, successHeader());

    res.write(JSON.stringify({
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds(),
    }));
  } else if (/unixtime$/.exec(urlObj.pathname)) {
    date = parseDate(urlObj);
    res.writeHead(200, successHeader());

    res.write(JSON.stringify({
      unixtime: date.getTime()
    }));
  } else {
    res.writeHead(400);
  }

  res.end();
});

server.listen(process.argv[2]);
