var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var buf = new Buffer(256);
  fs.readFileSync('index.html', function (err, data) {
    if (err) throw err;
    buf.write(data, "utf-8");
  });

  response.send(buf.toString('utf8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
