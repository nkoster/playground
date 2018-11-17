const
	http = require('http'),
	fs = require('fs');

http.createServer(function(req, res) {
	res.writeHead(200, { 'Content-Type': 'text/html' });
	fs.createReadStream(__dirname + '/index.html', 'utf8')
		.pipe(res);
	// res.end(fs.readFileSync(__dirname + '/index.html', 'utf8')
	// 	.replace('{Message}', 'apekop!'));
}).listen(4444, '127.0.0.1');
