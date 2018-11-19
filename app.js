const
	http = require('http'),
	fs = require('fs'),
	util = require('util');

http.createServer(function(req, res) {
	// res.writeHead(200, { 'Content-Type': 'application/json' });
	res.writeHead(200, { 'Content-Type': 'text/plain' });
	let obj = {
		firstname: 'Guus',
		lastname: 'Jansen'
	}
	res.end(util.inspect(req));
	//res.end(JSON.stringify(obj));
}).listen(4444, '127.0.0.1');
