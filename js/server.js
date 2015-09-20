var util = require("util"),
    http = require("http"),
    url = require("url"),
    path = require("path"),
    fs = require("fs");
     
http.createServer(function(request, response) {
    var uri = url.parse(request.url).pathname;
    var filename = path.join(process.cwd(), uri);
    fs.readFile(filename, function (err, file) {
       if (err) {
            response.writeHead(404, {"Content-Type": "text/plain"});
            response.write("404 Not Found\n");
            response.end();
            return;
       }
       response.writeHead(200);
       response.write(file, "binary");
       response.end();
       console.log(response);
    });
}).listen(8888);
 
console.log("Server running at http://localhost:8888/");