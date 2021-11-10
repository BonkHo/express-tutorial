const http = require("http");
const { readFileSync } = require("fs");

// Get all files
const homePage = readFileSync("./navbar-app/index.html");
const homeStyles = readFileSync("./navbar-app/styles.css");
const homeLogo = readFileSync("./navbar-app/logo.svg");
const homeScript = readFileSync("./navbar-app/browser-app.js");

const server = http.createServer(function (req, res) {
	const url = req.url;
	console.log(url);
	// Home Page
	if (url === "/") {
		res.writeHead(200, { "Content-Type": "text/html" });
		res.write(homePage);
		res.end();
	}
	// Styles
	else if (url === "/styles.css") {
		res.writeHead(200, { "Content-Type": "text/css" });
		res.write(homeStyles);
		res.end();
	}
	// Logo Image
	else if (url === "/logo.svg") {
		res.writeHead(200, { "Content-Type": "image/svg+xml" });
		res.write(homeLogo);
		res.end();
	}
	// Script
	else if (url === "/browser-app.js") {
		res.writeHead(200, { "Content-Type": "application/javascript" });
		res.write(homeScript);
		res.end();
	}
	// About Page
	else if (url === "/about") {
		res.writeHead(200, { "Content-Type": "text/html" });
		res.write("<h1>About Page</h1> <p>Welcome to the about page.</p>");
		res.end();
	}
	// 404 Page
	else {
		res.writeHead(404, { "Content-Type": "text/html" });
		res.write(
			"<h1>404 Page Not Found</h1> <p>The page you are looking for does not exist.</p>"
		);
		res.end();
	}
});

server.listen(5000);
console.log("Server is running on: http://localhost:5000");
