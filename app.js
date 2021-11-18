const express = require("express");
const app = express();
let { people } = require("./data.js");
// Middleware
// static assets
app.use(express.static("./methods-public"));
// parse form data
app.use(express.urlencoded({ extended: false }));
// parse json data
app.use(express.json());

// Requests
app.get("/api/people", (req, res) => {
	res.status(200).json({ success: true, data: people });
});

app.post("/api/people", (req, res) => {
	const { name } = req.body;
	if (!name) {
		return res.status(400).json({ success: false, error: "Name is required" });
	}
	res.status(201).json({ success: true, person: name });
});

app.post("/api/postman/people", (req, res) => {
	const { name } = req.body;
	if (!name) {
		return res.status(400).json({ success: false, error: "Name is required" });
	}
	res.status(201).json({ success: true, data: [...people, name] });
});

app.put("/api/people/:id", (req, res) => {
	const { id } = req.params;
	const { name } = req.body;
	if (!name) {
		return res.status(400).json({ success: false, error: "Name is required" });
	}
	const person = people.find((people) => people.id === Number(id));
	if (!person) {
		return res
			.status(404)
			.json({ success: false, error: `Person with id ${id} not found` });
	}
	person.name = name;
	res.status(200).json({ success: true, data: people });
});

app.delete("/api/people/:id", (req, res) => {
	const { id } = req.params;
	const person = people.find((people) => people.id === Number(id));
	if (!person) {
		return res
			.status(404)
			.json({ success: false, error: `Person with id ${id} not found` });
	}
	people = people.filter((people) => people.id !== Number(id));
	res.status(200).json({ success: true, data: people });
});

app.post("/login", (req, res) => {
	const { name } = req.body;
	if (name) {
		return res.status(200).send(`Welcome ${name}`);
	}
	res.status(401).send("Please provide a name");
});

app.listen(5000, () => {
	console.log("Server is running on: http://localhost:5000");
});
