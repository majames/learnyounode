var http = require('http');

var url = process.argv[2];

http.get(url, function(response) {
  // console.log(response.statusCode);

  response.on('data', function(data) {
    console.log(data.toString());
  });

  response.on('error', function(error) {
    console.error(error);
  });
});