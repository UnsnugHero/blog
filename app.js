const http = require('http');

const PORT = 3000;

http.createServer(function (req, res) {
	res.write("Hello, I am Snuggly");
	res.end();
}).listen(PORT);

console.log(`Server started on port ${PORT}`);
