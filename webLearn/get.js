var http = require ("http");
var url = require ("url");
var util = require ("util");
//get请求是一个所有的东西都放在请求里面，不是很安全。


http.createServer(function (req,res) {
  res.writeHead(200,{"Content-Type":"text/plain;charset=utf-8"});

var params = url.parse(req.url,true).query;
res.write("网站名：" + params.name);
   res.write("\n");
   res.write("网站 URL：" + params.url);
   res.end();

//  res.end(util.inspect(url.parse(req.url,true)));
//输出那个url中的东西可以干嘛的
}).listen(3000);



//
