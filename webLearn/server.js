var http = require ("http");
var test = require("./test")
http.createServer(function (request,response) {

  response.writeHead("200",{"Content-Type":"text/plain"});
  response.write(test.test);


  response.end();
}).listen(8080)

console.log("server is running at 8080");
