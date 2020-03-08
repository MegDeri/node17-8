var http = require("http");
var fs = require("fs");

var server = http.createServer();
server.on("request", function(request, response) {
  response.setHeader("Content-Type", "text/html; charset=utf-8");
  if (request.method === "GET" && request.url === "/") {
    response.statusCode = 200;
    fs.readFile("./index.html", function(err, data) {
      if (err) {
        throw err;
      }
      console.log("Connected");
      response.write(data);
      response.end();
    });
  } else {
    response.setHeader("Content-Type", "image/jpg");
    response.statusCode = 404;
    fs.readFile("./cat.jpg", function(err, data) {
      if (err) {
        throw err;
      }
      response.write(data);
      response.end();
    });
  }
});
server.listen(8080);
