var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  buf = new buffer(256);
  fs.readFile('index.html', function (err, data) {
    if (err) throw err;
    buf.write(data);
  });

  response.send(buf.toString('utf8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
