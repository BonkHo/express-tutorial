const http = require("http");
const { readFileSync } = require("fs");

// Get all files
const homePage = readFileSync("./index.html");

const server = http.createServer(function (req, res) {
	const url = req.url;
	// Home Page
	if (url === "/") {
		res.writeHead(200, { "Content-Type": "text/html" });
		res.write(homePage);
		res.end();
		// About Page
	} else if (url === "/about") {
		res.writeHead(200, { "Content-Type": "text/html" });
		res.write("<h1>About Page</h1> <p>Welcome to the about page.</p>");
		res.end();
		// 404 Page
	} else {
		res.writeHead(404, { "Content-Type": "text/html" });
		res.write(
			"<h1>404 Page Not Found</h1> <p>The page you are looking for does not exist.</p>"
		);
		res.end();
	}
});

server.listen(5000);
console.log("Server is running on: http://localhost:5000");
