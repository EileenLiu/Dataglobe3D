var util = require("util"),
    http = require("http"),
    url = require("url"),
    path = require("path"),
    fs = require("fs");
     
server = http.createServer(function(request, response) {
  var uri = url.parse(request.url).pathname;
  if (uri == '/index.html/' && request.method == 'GET') {
      console.log("GET");
      var query = url.parse(request.url, true).query;
      var country = query.country;
      console.log("country=");
      console.log(country);
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.end();
  }
});
port = 3000;
host = 'http://localhost'
server.listen(port, host);
console.log('Listening at http://' + host + ':' + port);

/*server = http.createServer(function(request, response) {
  var uri = url.parse(request.url).pathname;
  if (uri == '/index.html/data' && request.method == 'GET') {
      console.log("GET");
      var query = url.parse(request.url, true).query;
      var country = query.country;
      console.log("country=");
      console.log(country);
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.end();
  }
});
port = 3000;
host = '127.0.0.1'
server.listen(port, host);
console.log('Listening at http://' + host + ':' + port);
*/