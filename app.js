const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.status(500).json([{ name: "john" }, { name: "susan" }]);
});

app.listen(5000, () => {
	console.log("Server is running on: http://localhost:5000");
});
