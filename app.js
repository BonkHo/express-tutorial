const express = require("express");
const app = express();
let { people } = require("./data.js");

// static assets
app.use(express.static("./methods-public"));

app.get("/api/people", (req, res) => {
	res.status(200).json({ success: true, people: people });
});

app.post("/login", (req, res) => {
	res.send("login");
});

app.listen(5000, () => {
	console.log("Server is running on: http://localhost:5000");
});
