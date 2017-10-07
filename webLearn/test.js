
var fs = require ("fs");
//此为一种阻塞的方式
//var data = fs.readFileSync("in.txt","UTF-8");

//这是一个非阻塞操作
var data ="string";
fs.readFile('in.txt', function (err,data) {
    if (err)
    {
       console.log(err.stack);
        return;
    };
  console.log(data.toString());

});

console.log("程序运行完毕");
//运行的顺序发生 一些变化  先不管那些操作，最后自己会输出
