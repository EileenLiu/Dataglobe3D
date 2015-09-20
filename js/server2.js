var util = require("util"),
    http = require("http"),
    url = require("url"),
    path = require("path"),
    fs = require("fs"),
    db = require("./database.js");
     
server = http.createServer(function(request, response) {
  var uri = url.parse(request.url).pathname;
  var filename = path.join(process.cwd(), uri);
  if (uri == '/index.html/data' && request.method == 'GET') {
      console.log("GET");
      var query = url.parse(request.url, true).query;
      var country = query.country;
      console.log("country=");
      console.log(country);
      //var data = db.getData(country);
      //console.log(data);
      
    const AWS_REGION = 'us-east-1';
    const AWS_ACCESS_KEY_ID = 'AKIAIH3X76ZRNKULEFFQ';
    const AWS_SECRET_ACCESS_KEY = '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';
    const Strcountry = country;
    var aws = require('aws-sdk');
    aws.config.update({
        region: AWS_REGION,
        accessKeyId: AWS_ACCESS_KEY_ID,
        secretAccessKey: AWS_SECRET_ACCESS_KEY
    });

    var db = new aws.DynamoDB.DocumentClient();

    var params = {
        TableName: '2014',
        FilterExpression: 'begins_with(#t, :ticker) and #d >= :rangeval',
        ExpressionAttributeNames: {
          '#t': 'Ticker',
          '#d': 'Date'
        },
        ExpressionAttributeValues: {
          ':ticker': Strcountry,
          ':rangeval': '2014-12-30',
        },
    };
    var request = db.scan(params, function(err, data) {
        if (err){
          response.writeHead(404, {"Content-Type": "text/plain"});
          response.write("404 Not Found\n");
          response.end();
        }
        else{
          //console.log(data);
          response.writeHead(200);
          response.write(JSON.stringify(data));
          response.end();
          //console.log(response);
        }
    });
  }else{
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
    });
  }
});
port = 3000;
host = '127.0.0.1'
server.listen(port, host);
console.log('Listening at http://' + host + ':' + port);