//这是一个学习express中的demo
var express = require ("express");

var app = express();

app.get("/",function (req,res) {
  res.send("hellworld");
  

});

var Server = app.listen(8081,function () {
  var host  = Server.address().address;
  var port = Server.address().port;
  console.log("应用实例，访问地址为http://%s:%s",host,port);
})
