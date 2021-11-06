const http = require("http");

const server = http.createServer(function (req, res) {
	res.write("Hello World");
	console.log("User hit server.");
	res.end();
});

server.listen(5000);
console.log("Server is running on: http://localhost:5000");
