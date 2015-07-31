function route(handle, pathname, response, request) {
	'use strict';
	console.log('About to route a request for"' + pathname + '"');
	if (typeof handle[pathname] === 'function') {
		handle[pathname](response, request);
	} else {
		console.log('No request handler found for "' + pathname + '"');
		response.writeHead(404, {"content-type":"text/plain"});
		response.write("404 Not Found");
		response.end();
		//return "404 Not found"
	} 
}

exports.route = route;
