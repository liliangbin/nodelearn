var exec = require("child_process").exec;


function start() {
  console.log("Request hander ‘start ’ was called");

  var content = "empty";
  exec("ls -lah",function functionName(error,stdout,stder) {
    content = stdout;

  })

    return content;
}

function upload() {
  console.log("request handdle ' upload ' was called");
    return "Hello upload";
}
exports.start = start;
exports.upload = upload;
