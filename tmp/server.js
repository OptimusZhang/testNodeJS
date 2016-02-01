var http = require("http");
var logger = require('./testLog4js').logger("index");
http.createServer(function (request, response) {

    logger.trace("trace");
    logger.info("info");
    logger.debug("debug");

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Log Level: ");
    response.end();
}).listen(8888);
