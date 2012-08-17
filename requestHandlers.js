var exec = require("child_process").exec;
var fs = require("fs");

function start(response) {
  console.log("Request handler 'start' was called.");
    fs.readFile("./hello.html", function(error, file){
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(file);
    response.end();
  });
}

function upload(response) {
  console.log("Request handler 'upload' was called.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello Upload");
  response.end();
}

exports.start = start;
exports.upload = upload;
