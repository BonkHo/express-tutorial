const express = require("express");
const app = express();

// app.get
app.get("/", (req, res) => {
	res.status(200).send("Home Page");
	res.end();
});

app.get("/about", (req, res) => {
	res.status(200).send("About Page");
	res.end();
});

// app.post
// app.put
// app.delete
// app.all
app.all("*", (req, res) => {
	res.status(404).send("404 Not Found");
	res.end();
});
// app.use
// app.listen
app.listen(5000, () => {
	console.log("Server is running at: http://localhost:5000");
});
