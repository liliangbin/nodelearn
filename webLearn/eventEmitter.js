/*
这是一个事件驱动的模型，
此处用的是事件循环的操作

*/

var events = require ("events");

var eventEmitter  = new events.EventEmitter();

var connectHandler = function connected() {
  console.log("链接成功");
  //触发data-receive 事件
  eventEmitter.emit("data-receive");

}

eventEmitter.on("connection",connectHandler);

eventEmitter.on("data-receive",function(){

  console.log("数据接收成功");

});


eventEmitter.emit("connection");

console.log("程序执行完成");
