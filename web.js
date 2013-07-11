var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  fs.readFile('index.html', function (err, data) {
    if (err) throw err;
    buf = new buffer(256);
    buf.write(data, "utf-8");
  });

  response.send(buf.toString('utf8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
