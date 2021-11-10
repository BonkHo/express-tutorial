const express = require("express");
const app = express();

// app.get
app.get("/", (req, res) => {
	res.send("Home Page");
	res.end();
});

app.get("/about", (req, res) => {
	res.send("About Page");
	res.end();
});

// app.post
// app.put
// app.delete
// app.all
app.all("*", (req, res) => {
	res.send("404 Not Found");
	res.end();
});
// app.use
// app.listen
app.listen(5000, () => {
	console.log("Server is running at: http://localhost:5000");
});
