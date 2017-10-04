
var fs = require ("fs");

var data = fs.readFileSync("in.txt","UTF-8");
function test() {
  return data.toString();
}
console.log(data.toString());
console.log("程序运行完毕");

exports.test = test;
