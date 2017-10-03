var http = require("http");
var url = require("url");


function start(route,handle) {
function onRequest(request,response) {
  var pathname = url.parse(request.url).pathname;
  console.log("request"+pathname+" received");
  route(handle,pathname);
  response.writeHead(200, {"Content-Type": "text/plain"});
  var content = route(handle,pathname);
  response.write(content);
  response.end();
}

http.createServer(onRequest).listen(8888);

console.log("server  is running at 8888");

}

exports.start = start;