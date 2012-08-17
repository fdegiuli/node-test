var http = require("http");
var url  = require("url");

function start(route, handle) {
    function onrequest(request, response) {
	var pathname = url.parse(request.url).pathname;
	console.log("Request for " + pathname + " received");

	route(handle, pathname, response);

    }

    http.createServer(onrequest).listen(8888);

    console.log("Created server");
}

exports.start = start;
