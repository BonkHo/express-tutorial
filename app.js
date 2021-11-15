const express = require("express");
const app = express();

// req => middleware => res
const logger = require("./logger.js");

// Applies logger middleware to all requests after the app.use()
app.use(logger);

app.get("/", (req, res) => {
	res.send("Home page");
});

app.get("/about", (req, res) => {
	res.send("About page");
});

app.get("/api/products", (req, res) => {
	res.send("Products page");
});

app.get("/api/items", (req, res) => {
	res.send("Items page");
});

app.listen(5000, () => {
	console.log("Server is running on: http://localhost:5000");
});
