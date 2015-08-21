var net = require('net');

var portNumber = process.argv[2];

var server = net.createServer(function(socket) {
  var date = new Date(), dateStr = '';
  var hours, minutes;

  hours = date.getHours() >= 10 ? date.getHours() : '0' + date.getHours();
  minutes = date.getMinutes() >= 10 ? date.getMinutes() : '0' + date.getMinutes();

  dateStr += date.toISOString().replace(/T.+/g, '');
  dateStr += ' ' + hours + ':' + minutes;

  socket.write(dateStr + '\n');
  socket.end();
});

server.listen(portNumber);