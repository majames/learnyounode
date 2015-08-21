var http = require('http');
var bl = require('bl');

var firstURL = process.argv[2];
var secondURL = process.argv[3];
var thirdURL = process.argv[4];

var responses = {};

var allThreeResponsesReceived = function() {
  return responses[firstURL] && responses[secondURL] && responses[thirdURL];
};

var printResults = function() {
  if (allThreeResponsesReceived()) {
    console.log(responses[firstURL]);
    console.log(responses[secondURL]);
    console.log(responses[thirdURL]);
  }
};

http.get(firstURL, function(response) {
  response.pipe(bl(function(err, data) {
    responses[firstURL] = data.toString();
    printResults();
  }));
});

http.get(secondURL, function(response) {
  response.pipe(bl(function(err, data) {
    responses[secondURL] = data.toString();
    printResults();
  }));
});

http.get(thirdURL, function(response) {
  response.pipe(bl(function(err, data) {
    responses[thirdURL] = data.toString();
    printResults();
  }));
});